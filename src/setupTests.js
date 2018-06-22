import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

console.error = message => {
    throw new Error(message);
};

configure({ adapter: new Adapter() });