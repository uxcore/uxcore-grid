import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Row from '../src/Row';

Enzyme.configure({ adapter: new Adapter() });

describe('Row', () => {
  it('render correct', () => {
    mount(<Row />);
  });
});

describe('Props', () => {
  let wrapper;

  it('componentClass string support', () => {
    wrapper = mount(<Row componentClass="p" />);
    expect(wrapper.find('p')).to.have.length('1');
  });
  it('componentClass func support', () => {
    const Test = () => <p>测试用例</p>;
    wrapper = mount(<Row componentClass={Test} />);
    expect(wrapper.find('p')).to.have.length('1');
  });
  it('className support', () => {
    wrapper = mount(<Row className="test" />);
    expect(wrapper.getDOMNode().classList.contains('test')).to.be(true);
  });
});

