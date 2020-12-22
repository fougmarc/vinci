const nextPathToEyecatchTitle = {
  'index': 'TOP',
  'about': 'A PROPOS DE NOUS ',
  'lovegraph': 'Nos valeurs',
  'photography': 'Comment devenir membre ?',
  'contact': 'CONTACT',
};

export default function wipe1(el, done, rootIndexSelector, nextPath) {
  requestAnimationFrame(() => {
    const wipeDuration = 0.7;
    const wipeInterval = 0.1;
    const eyecatchDuration = 1.8;
    TweenMax.to('.wipe1-box1', wipeDuration, {height: '100%'});
    TweenMax.to('.wipe1-box2', wipeDuration, {height: '100%', delay: wipeInterval, onComplete() {
      document.querySelector(".wipe1-text1").textContent = nextPathToEyecatchTitle[nextPath];
      TweenMax.set('.wipe1-text1', { 'top': window.innerHeight / 2 - 30 });
      TweenMax.to('.wipe1-text1', 0.1, {opacity: 1, delay: wipeInterval});
    }});
    TweenMax.to('.wipe1-box3', wipeDuration, {height: '100%', delay: wipeInterval * 3 });
    TweenMax.to(rootIndexSelector, wipeDuration, {height: '0%', delay: wipeInterval * 3 + eyecatchDuration, onComplete() {
      done()
    }});
  });
}
