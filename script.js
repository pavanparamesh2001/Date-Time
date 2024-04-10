document.getElementById('timeForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const timezone = document.getElementById('timezone').value;
  
    try {
      const response = await fetch(`https://worldtimeapi.org/api/timezone/${timezone}`);
      if (!response.ok) {
        throw new Error('Failed to fetch time data');
      }
      const data = await response.json();
      const dateTime = new Date(data.datetime);
      const formattedTime = dateTime.toLocaleString();
      document.getElementById('timeDisplay').textContent = `Current time in ${data.timezone}: ${formattedTime}`;
    } catch (error) {
      console.error(error);
      document.getElementById('timeDisplay').textContent = 'An error occurred while fetching time data';
    }
  });