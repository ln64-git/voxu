// utils/voxctl.ts

class VoxCtl {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  private async sendCommand(action: string, text?: string) {
    try {
      const url = text
        ? `${this.endpoint}/${action}?text=${encodeURIComponent(text)}`
        : `${this.endpoint}/${action}`;
      await fetch(url);
    } catch (error) {
      console.error('Error sending command', error);
    }
  }

  // Command methods
  stop() {
    this.sendCommand('stop');
  }

  speak(text: string) {
    this.sendCommand('speak', text);
  }

  speakClipboard() {
    this.sendCommand('speakClipboard');
  }

  // Method to update status
  async updateStatus(setBgColor: (color: string) => void) {
    try {
      const response = await fetch(`${this.endpoint}/status`);
      const data = await response.json();
      if (data.speechActive) {
        setBgColor('bg-green-500');
      } else {
        setBgColor('bg-neutral-700');
      }
    } catch (error) {
      console.error('Error fetching status:', error);
    }
  }
}

// Export an instance of the class
export const voxCtl = new VoxCtl('https://your-api-endpoint');
