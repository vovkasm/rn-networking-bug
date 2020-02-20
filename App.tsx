import React from 'react';
import {SafeAreaView} from 'react-native';

export default class App extends React.Component {
  componentDidMount() {
    this.getFakeArray(10).forEach((_, index) => {
      const t0 = new Date().getTime();
      this.promise().then(() => {
        const t1 = new Date().getTime();
        console.log('promise(' + index + ') ->', t1 - t0, 'ms');
      });
    });

    this.getFakeArray(10).forEach((_, index) => {
      const t0 = new Date().getTime();
      this.fetch(index).then(() => {
        const t1 = new Date().getTime();
        console.log('fetch(' + index + ') ->', t1 - t0, 'ms');
      });
    });
  }

  getFakeArray = (n: number) => {
    return new Array(n).fill(null);
  };

  promise = () => {
    return new Promise(resolve => setTimeout(resolve, 1000));
  };

  fetch = (i: number) => {
    return fetch('https://google.com/' + i);
  };

  render() {
    return (
      <SafeAreaView>
        {/*  */}
        {/*  */}
      </SafeAreaView>
    );
  }
}
