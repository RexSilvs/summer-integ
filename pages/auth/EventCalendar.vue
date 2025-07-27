<template>
  <div class="container">
    <h1>Google Calendar Scheduler</h1>
    <div class="button-group">
      <button @click="create" class="action-btn">📅 Create Event</button>
      <button @click="showEvents" class="action-btn">📖 Show Events</button>
    </div>
  </div>
</template>

<script>
export default {
  async mounted() {
    try {
      console.log('Calendar Plugin:', this.$calendar); // Debugging
      const token = localStorage.getItem('access_token');
      if (!token) throw new Error('Access token not found');
      await this.$calendar.initGapiClient(token);
      console.log('GAPI client initialized!');
    } catch (error) {
      console.error('GAPI init failed:', error);
    }
  },
  methods: {
    async create() {
      try {
        const event = await this.$calendar.createEvent({
          summary: 'My Custom Event',
          start: {
            dateTime: '2025-07-28T14:00:00+08:00',
            timeZone: 'Asia/Manila'
          },
          end: {
            dateTime: '2025-07-28T15:00:00+08:00',
            timeZone: 'Asia/Manila'
          }
        });
        alert('Event created: ' + event.htmlLink);
      } catch (error) {
        console.error('Create error:', error);
        alert('Error creating event');
      }
    },
    async showEvents() {
      try {
        const events = await this.$calendar.listEvents();
        if (!events.length) {
          console.log('No upcoming events found.');
        } else {
          console.log('Upcoming events:');
          events.forEach(event => {
            const start = event.start.dateTime || event.start.date;
            console.log(`${start} - ${event.summary}`);
          });
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f5f7fa;
  min-height: 100vh;
}

h1 {
  margin-bottom: 30px;
  font-size: 28px;
  color: #333;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 300px;
}

.action-btn {
  padding: 12px 20px;
  background-color: #4285f4;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background 0.2s ease;
}

.action-btn:hover {
  background-color: #3367d6;
}
</style>
