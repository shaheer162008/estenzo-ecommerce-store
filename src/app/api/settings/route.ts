import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import { Settings } from '@/models'

export async function GET() {
  try {
    await dbConnect()

    const settings = await Settings.findOne() || {}

    return NextResponse.json({
      success: true,
      data: settings
    })

  } catch (error) {
    console.error('Settings GET error:', error)
    return NextResponse.json({
      success: false,
      message: 'Failed to fetch settings',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    await dbConnect()

    const body = await request.json()

    const settings = await Settings.findOneAndUpdate(
      {},
      body,
      { 
        new: true, 
        upsert: true,
        runValidators: true
      }
    )

    return NextResponse.json({
      success: true,
      message: 'Settings updated successfully',
      data: settings
    })

  } catch (error) {
    console.error('Settings PUT error:', error)
    return NextResponse.json({
      success: false,
      message: 'Failed to update settings',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
