import React from 'react';
import {SafeAreaView, Button} from 'react-native';

export default class App extends React.Component {
  makeRequests() {
    for (let i = 0; i < 10; i++) {
      this.oneRequest(i);
    }
  }

  oneRequest(i: number) {
    const t0 = Date.now();
    console.log(`[${new Date(t0).toJSON()}] req ${i} start`);
    fetch(
      `https://libraries.io/search?order=desc&page=${i +
        2}&platforms=npm&sort=rank`,
    ).finally(() => {
      const t1 = Date.now();
      console.log(`[${new Date(t1).toJSON()}] req ${i} end dur=${t1 - t0}`);
    });
  }

  render() {
    return (
      <SafeAreaView>
        <Button title="Test!" onPress={() => this.makeRequests()} />
      </SafeAreaView>
    );
  }
}
