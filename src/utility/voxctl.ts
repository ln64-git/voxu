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

  stop() {
    this.sendCommand('stop');
  }
  speak(text: string) {
    this.sendCommand('speak', text);
  }
  speakClipboard() {
    this.sendCommand('speakClipboard');
  }

  async getStatus() {
    try {
      const response = await fetch(`${this.endpoint}/status`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching status:', error);
      return null;
    }
  }
}

export const voxCtl = new VoxCtl('https://localhost:8080');
