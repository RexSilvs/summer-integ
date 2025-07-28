export default ({ $auth }, inject) => {
  const BASE_URL = 'https://www.googleapis.com/calendar/v3'

  const getToken = () => {
    return localStorage.getItem("auth._token.google").split(" ")[1]
  }

  const calendar = {
    async createEvent(summary, start, end) {
      const token = getToken()
      const res = await fetch(`${BASE_URL}/calendars/primary/events`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          summary,
          start: { dateTime: start, timeZone: 'Asia/Manila' },
          end: { dateTime: end, timeZone: 'Asia/Manila' },
        }),
      })

      if (!res.ok) throw await res.json()
      return await res.json()
    },

    async listEvents() {
      const token = getToken()
      const now = new Date().toISOString()

      const res = await fetch(`${BASE_URL}/calendars/primary/events?timeMin=${now}&singleEvents=true&orderBy=startTime`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!res.ok) throw await res.json()
      const data = await res.json()
      return data.items
    },
  }

  inject('calendar', calendar)
}