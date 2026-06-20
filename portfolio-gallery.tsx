'use client'

import { useState } from 'react'
import { Calculator, MessageCircle } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { waLink, site } from '@/lib/site'

const buildingTypes = [
  { key: 'standard', label: 'Standar', rate: 4500000 },
  { key: 'menengah', label: 'Menengah', rate: 6000000 },
  { key: 'premium', label: 'Premium', rate: 8500000 },
] as const

const workTypes = [
  { key: 'bangun', label: 'Bangun Baru', factor: 1 },
  { key: 'renovasi', label: 'Renovasi', factor: 0.7 },
] as const

const idr = (n: number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(n)

export function CostEstimator() {
  const [area, setArea] = useState('100')
  const [floors, setFloors] = useState('1')
  const [type, setType] = useState<(typeof buildingTypes)[number]['key']>('menengah')
  const [work, setWork] = useState<(typeof workTypes)[number]['key']>('bangun')

  const areaNum = Math.max(0, Number(area) || 0)
  const floorsNum = Math.max(1, Number(floors) || 1)
  const rate = buildingTypes.find((b) => b.key === type)!.rate
  const factor = workTypes.find((w) => w.key === work)!.factor

  const total = areaNum * floorsNum * rate * factor
  const low = total * 0.9
  const high = total * 1.15

  const message = `Halo ${site.name}, saya ingin konsultasi lebih lanjut.
Estimasi proyek saya:
- Jenis pekerjaan: ${workTypes.find((w) => w.key === work)!.label}
- Luas bangunan: ${areaNum} m²
- Jumlah lantai: ${floorsNum}
- Kualitas: ${buildingTypes.find((b) => b.key === type)!.label}
- Perkiraan biaya: ${idr(low)} - ${idr(high)}
Mohon dibantu untuk RAB detailnya. Terima kasih.`

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="flex items-center gap-3 border-b border-border bg-muted px-6 py-5">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
          <Calculator className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-heading text-lg font-bold text-foreground">Kalkulator Estimasi Biaya</h3>
          <p className="text-sm text-muted-foreground">Perkiraan kasar, bukan penawaran final.</p>
        </div>
      </div>

      <div className="grid gap-6 p-6 md:grid-cols-2">
        <div className="space-y-5">
          <div>
            <Label className="mb-2 block">Jenis Pekerjaan</Label>
            <div className="grid grid-cols-2 gap-2">
              {workTypes.map((w) => (
                <button
                  key={w.key}
                  type="button"
                  onClick={() => setWork(w.key)}
                  className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors ${
                    work === w.key
                      ? 'border-accent bg-accent text-accent-foreground'
                      : 'border-border bg-background text-foreground hover:border-accent/50'
                  }`}
                >
                  {w.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="area" className="mb-2 block">
                Luas (m²)
              </Label>
              <Input
                id="area"
                type="number"
                min={0}
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="floors" className="mb-2 block">
                Jumlah Lantai
              </Label>
              <Input
                id="floors"
                type="number"
                min={1}
                value={floors}
                onChange={(e) => setFloors(e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label className="mb-2 block">Kualitas Bangunan</Label>
            <div className="grid grid-cols-3 gap-2">
              {buildingTypes.map((b) => (
                <button
                  key={b.key}
                  type="button"
                  onClick={() => setType(b.key)}
                  className={`rounded-lg border px-2 py-2.5 text-sm font-medium transition-colors ${
                    type === b.key
                      ? 'border-accent bg-accent text-accent-foreground'
                      : 'border-border bg-background text-foreground hover:border-accent/50'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-xl bg-primary p-6 text-primary-foreground">
          <div>
            <p className="text-sm text-primary-foreground/70">Perkiraan Total Biaya</p>
            <p className="mt-2 font-heading text-2xl font-extrabold text-accent md:text-3xl">
              {idr(low)}
            </p>
            <p className="text-sm text-primary-foreground/70">hingga {idr(high)}</p>
            <p className="mt-4 text-xs leading-relaxed text-primary-foreground/60">
              Estimasi dihitung berdasarkan harga satuan per m² dan dapat berbeda tergantung kondisi
              lapangan, spesifikasi material, dan desain akhir.
            </p>
          </div>
          <a
            href={waLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'mt-6 h-11 w-full bg-accent text-accent-foreground hover:bg-accent/90',
            )}
          >
            <MessageCircle className="h-4 w-4" />
            Konsultasi Estimasi Ini
          </a>
        </div>
      </div>
    </div>
  )
}
