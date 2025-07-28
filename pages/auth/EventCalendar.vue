<template>
  <v-container class="text-center">
    <h1 class="my-5">Google Calendar Scheduler</h1>

    <v-btn color="primary" class="mb-2" @click="createEvent">
      <v-icon left>mdi-calendar-plus</v-icon> Create Event
    </v-btn>

    <v-btn color="primary" class="mb-2" @click="listEvents">
      <v-icon left>mdi-calendar-text</v-icon> Show Events
    </v-btn>

    <v-btn color="red" class="mb-2" @click="logout">
      <v-icon left>mdi-logout</v-icon> Logout
    </v-btn>

    <div v-if="events.length">
      <h3 class="mt-5">Upcoming Events</h3>
      <ul>
        <li v-for="event in events" :key="event.id">{{ event.summary }} - {{ convertDate(new Date(event.start.dateTime).getTime()) }}</li>
      </ul>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      events: [],
    }
  },
  methods: {
    async createEvent() {
      try {
        await this.$calendar.createEvent('Meeting with Team', '2025-07-28T10:00:00', '2025-07-28T11:00:00')
        alert('Event Created!')
      } catch (error) {
        console.error('Create Event Error:', error)
      }
    },
    async listEvents() {
      try {
        const events = await this.$calendar.listEvents()
        this.events = events
      } catch (error) {
        console.error('List Events Error:', error)
      }
    },
    async logout() {
      await this.$auth.logout()
    },
    convertDate(time) {
      const date = new Date(time * 1000); 

      const fullTime = date.toLocaleString();
    
      return fullTime
    }
  },
}
</script>