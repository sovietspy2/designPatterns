import SomeSystem from './someSystem';
// facade pattern is basically hiding the complex logic behind a simple api call
export default () => {
    const system = new SomeSystem();

    const response = system.processRequest("get", 123, "hello there general kenobi");
    console.log(response);
};