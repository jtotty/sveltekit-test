import type { PageServerLoad } from './$types'
import type { Activity } from '../types'

export const load: PageServerLoad = async (): Promise<Activity> => {
    const response = await (await fetch('https://www.boredapi.com/api/activity')).json()
    
    return {
        activity: response.activity,
        type: response.type,
        participants: response.participants
    }
}
