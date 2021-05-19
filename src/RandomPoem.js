class RandomPoem {
  static init() {
    const url = 'https://poetrydb.org/random';
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => {
        this.poem = data[0];
        resolve(this.poem);
      })
      .catch(err => {
        reject(err);
      });
    });
  }
}

export default RandomPoem;