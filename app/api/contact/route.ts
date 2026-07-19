import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const data = {
      nom: formData.get('nom'),
      telephone: formData.get('telephone'),
      adresse: formData.get('adresse') || 'Non renseignée',
      message: formData.get('message'),
    }
    console.log('[CONTACT]', JSON.stringify(data))
    return NextResponse.redirect(new URL('/merci', request.url))
  } catch {
    return NextResponse.redirect(new URL('/merci', request.url))
  }
}
