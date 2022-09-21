import type { Activity } from '../types'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }: { fetch: any }) {
    const data = await (await fetch('https://www.boredapi.com/api/activity')).json()

    // only need to return the properties we need
    return {
        activity: data.activity,
        type: data.type,
        participants: data.participants
    }
}