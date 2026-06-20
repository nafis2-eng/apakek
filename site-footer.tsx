'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { services, site } from '@/lib/site'

export function RfqForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    budget: '',
    message: '',
  })

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `*Permintaan Penawaran Baru*
Nama: ${form.name}
Telepon: ${form.phone}
Email: ${form.email || '-'}
Layanan: ${form.service || '-'}
Estimasi Anggaran: ${form.budget || '-'}
Kebutuhan:
${form.message || '-'}`
    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`,
      '_blank',
    )
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent-foreground">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-heading text-xl font-bold text-foreground">Permintaan Terkirim!</h3>
        <p className="mt-2 max-w-sm text-muted-foreground">
          Anda akan diarahkan ke WhatsApp kami. Tim {site.name} akan segera merespons permintaan
          penawaran Anda.
        </p>
        <Button
          variant="outline"
          className="mt-6 bg-transparent"
          onClick={() => setSubmitted(false)}
        >
          Kirim Permintaan Lain
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
    >
      <h3 className="font-heading text-xl font-bold text-foreground">Minta Penawaran (RFQ)</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Isi formulir di bawah, kami akan menghubungi Anda secepatnya.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <Label htmlFor="name" className="mb-2 block">
            Nama Lengkap <span className="text-accent-foreground">*</span>
          </Label>
          <Input
            id="name"
            required
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="Nama Anda"
          />
        </div>
        <div className="sm:col-span-1">
          <Label htmlFor="phone" className="mb-2 block">
            No. WhatsApp <span className="text-accent-foreground">*</span>
          </Label>
          <Input
            id="phone"
            required
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            placeholder="0812xxxxxxxx"
          />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="email" className="mb-2 block">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="email@contoh.com"
          />
        </div>
        <div className="sm:col-span-1">
          <Label className="mb-2 block">Layanan</Label>
          <Select value={form.service} onValueChange={(v) => update('service', v)}>
            <SelectTrigger>
              <SelectValue placeholder="Pilih layanan" />
            </SelectTrigger>
            <SelectContent>
              {services.map((s) => (
                <SelectItem key={s.slug} value={s.title}>
                  {s.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="sm:col-span-1">
          <Label className="mb-2 block">Estimasi Anggaran</Label>
          <Select value={form.budget} onValueChange={(v) => update('budget', v)}>
            <SelectTrigger>
              <SelectValue placeholder="Pilih rentang" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="< Rp 100 Juta">{'< Rp 100 Juta'}</SelectItem>
              <SelectItem value="Rp 100 - 500 Juta">Rp 100 - 500 Juta</SelectItem>
              <SelectItem value="Rp 500 Juta - 1 Miliar">Rp 500 Juta - 1 Miliar</SelectItem>
              <SelectItem value="> Rp 1 Miliar">{'> Rp 1 Miliar'}</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="message" className="mb-2 block">
            Deskripsi Kebutuhan
          </Label>
          <Textarea
            id="message"
            rows={4}
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            placeholder="Ceritakan kebutuhan proyek Anda, lokasi, dan target waktu..."
          />
        </div>
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full">
        <Send className="h-4 w-4" />
        Kirim Permintaan
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Dengan mengirim, Anda akan diarahkan ke WhatsApp untuk konfirmasi.
      </p>
    </form>
  )
}
