import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type') || ''
    let data: Record<string, unknown>

    if (contentType.includes('application/json')) {
      data = await request.json()
    } else {
      const formData = await request.formData()
      data = {
        nom: formData.get('nom'),
        telephone: formData.get('telephone'),
        adresse: formData.get('adresse') || 'Non renseignée',
        message: formData.get('message'),
      }
      // For legacy form POST, redirect to merci page
      console.log('[CONTACT]', JSON.stringify(data))
      return NextResponse.redirect(new URL('/merci', request.url))
    }

    console.log('[CONTACT]', JSON.stringify(data))
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
