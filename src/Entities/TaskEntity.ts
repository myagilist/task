class TaskEntity {
  public static levels: Array<string> = ['lowest', 'low', 'medium', 'high', 'highest'];
 
  public static levelToIndex(level: string): number {
    return TaskEntity.levels.indexOf(level);
  }

  public content: string;
  public priority: string;
  public date: Date;

  constructor(message: string) {
    this.content = this.toContent(message);
    this.priority = this.toPriority(message); 
    this.date = new Date();
  }

  public publishedAt(): string {
    let day: string = String(this.date.getDate()).padStart(2, '0'); 
    let month: string = String(this.date.getMonth() + 1).padStart(2, '0'); 
    let year: string = String(this.date.getFullYear());

    return `${day}/${month}/${year}`;
  }

  public priorityIndex(): number {
    return TaskEntity.levels.indexOf(this.priority);
  }

  public priorityClassName(): string {
    return this.priority.split(' ').join('-');
  }

  private toContent(message: string): string {
    let splittedMessage = message.split(' ');

    if(this.countLevel(splittedMessage[0]) > 0) {
      splittedMessage.shift()
      return splittedMessage.join(' ');
    } else {
      return message;
    }
  }

  private toPriority(message: string): string {
    let splittedMessage = message.split(' ');

    return TaskEntity.levels[this.countLevel(splittedMessage[0])];
  }

  private countLevel(message: string): number {
    return (message.match(/!/g) || []).length;
  }
}

export default TaskEntity;