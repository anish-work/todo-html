export class SampleService {
  static state = [];
  static addItem(item) {
    this.state.push(item);
  }
  static getItem(id){
    return this.state.find(i => id === i.id);
  }
}