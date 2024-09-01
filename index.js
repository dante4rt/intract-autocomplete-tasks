const _0x5bf093 = _0x59e3;
function _0x2835() {
  const e = [
    'click',
    'Skipping completed task',
    '6749407KHrLTT',
    'then',
    '83475UebPmo',
    '620514DQSgkx',
    'All tasks processed! ^_^\nSubscribe: https://t.me/HappyCuanAirdrop',
    'Clicked task container',
    '17300072OJLxxB',
    '1782294mHbzbk',
    'querySelectorAll',
    'log',
    '1560750MgpqPU',
    '1783716hMsgtJ',
    'Clicked verify button',
    'div[data-badge-size="md"][data-button-badge-variant="tertiary"]',
    'button[data-verify-button-status="idle"][data-verify-button-disabled="false"]',
    'Intract Auto Complete Tasks by HappyCuanAirdrop \nSubscribe: https://t.me/HappyCuanAirdrop',
    'All tasks processed.',
    '3kKhEfp',
    'dispatchEvent',
    'textContent',
  ];
  return (_0x2835 = function () {
    return e;
  })();
}
function clickElement(e) {
  var t = _0x5bf093,
    n = new MouseEvent(t(434), { view: window, bubbles: !0, cancelable: !0 });
  e[t(432)](n);
}
function delay(t) {
  return new Promise((e) => setTimeout(e, t));
}
async function processTasks() {
  var e = _0x5bf093;
  for (const n of document[e(444)]('div._accordian_base_container_1vd77_1')) {
    var t = n.querySelector(e(427));
    t && t[e(433)].includes('Completed')
      ? console[e(445)](e(435))
      : (clickElement(n),
        console[e(445)](e(441)),
        await delay(1e3),
        (t = n.querySelector(e(428))) &&
          (clickElement(t), console[e(445)](e(426))));
  }
  console[e(445)](e(430)),
    console[e(445)]('Subscribe: https://t.me/HappyCuanAirdrop');
}
function _0x59e3(e, t) {
  const n = _0x2835();
  return (_0x59e3 = function (e, t) {
    return (e -= 426), n[e];
  })(e, t);
}
(function () {
  for (var e = _0x59e3, t = _0x2835(); ; )
    try {
      if (
        536912 ==
        +parseInt(e(438)) +
          (parseInt(e(439)) / 2) * (parseInt(e(431)) / 3) +
          -parseInt(e(447)) / 4 +
          -parseInt(e(446)) / 5 +
          -parseInt(e(443)) / 6 +
          -parseInt(e(436)) / 7 +
          parseInt(e(442)) / 8
      )
        break;
      t.push(t.shift());
    } catch (e) {
      t.push(t.shift());
    }
})(),
  alert(_0x5bf093(429)),
  processTasks()[_0x5bf093(437)](() => {
    var e = _0x5bf093;
    alert(e(440));
  });
