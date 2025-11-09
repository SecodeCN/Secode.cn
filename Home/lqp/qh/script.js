// 打字效果文案
const lines = [
  "从遇见你开始，普通的日子有了涟漪。",
  "我开始期待清晨，也热爱着夜里。",
  "因为在每个间隙里，都会浮现你的名字。",
  "所以我鼓起全部的勇气——",
  "想邀请你，与我一起携手走向漫长的未来。"
];

const tw = document.getElementById('typewriter');
let iLine = 0, iChar = 0;

function typeLoop() {
  if (iLine < lines.length) {
    const current = lines[iLine];
    tw.innerHTML = lines.slice(0, iLine)
      .map(l => `<div>${l}</div>`).join('') +
      `<div>${current.slice(0, iChar)}<span class="caret">|</span></div>`;
    if (iChar < current.length) {
      iChar++;
      setTimeout(typeLoop, 55);
    } else {
      iLine++; iChar = 0;
      setTimeout(typeLoop, 600);
    }
  } else {
    tw.innerHTML = lines.map(l => `<div>${l}</div>`).join('');
  }
}
typeLoop();

// 背景心形/粒子动画
const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
let W, H;
function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class Heart {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * W;
    this.y = H + 30 + Math.random() * 100;
    this.size = 8 + Math.random() * 18;
    this.speed = 0.4 + Math.random() * 1.3;
    this.alpha = 0.3 + Math.random() * 0.7;
    this.scale = 0.6 + Math.random() * 0.8;
  }
  draw() {
    this.y -= this.speed;
    this.x += Math.sin(this.y * 0.02) * 0.6;
    this.alpha -= 0.0009;
    if (this.y < -50 || this.alpha <= 0) this.reset();
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.translate(this.x, this.y);
    ctx.scale(this.scale, this.scale);
    ctx.rotate(Math.PI);
    ctx.fillStyle = 'rgba(255,79,154,0.9)';
    ctx.beginPath();
    const s = this.size;
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-s, -s, -s*1.6, s*0.5, 0, s*1.8);
    ctx.bezierCurveTo(s*1.6, s*0.5, s, -s, 0, 0);
    ctx.fill();
    ctx.restore();
  }
}
const hearts = Array.from({length: 70}, () => new Heart());
function animate() {
  ctx.clearRect(0,0,W,H);
  hearts.forEach(h => h.draw());
  requestAnimationFrame(animate);
}
animate();

// 按钮交互
const yesBtn = document.getElementById('yesBtn');
const thinkBtn = document.getElementById('thinkBtn');
const feedback = document.getElementById('feedback');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

yesBtn.addEventListener('click', () => {
  feedback.textContent = "❤️ 谢谢你，我会用一生来守护这份答复。";
  launchConfetti();
  setTimeout(()=> modal.classList.remove('hidden'), 1000);
});

thinkBtn.addEventListener('click', () => {
  feedback.textContent = "我愿再等一等，因为你值得所有耐心。";
  wiggle(thinkBtn);
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// 简易彩带
function launchConfetti() {
  const count = 160;
  for (let i=0;i<count;i++) {
    const div = document.createElement('div');
    div.className = 'confetti';
    const size = 6 + Math.random()*10;
    div.style.width = size+'px';
    div.style.height = size+'px';
    div.style.background = `hsl(${Math.random()*360},80%,60%)`;
    div.style.left = Math.random()*100+'%';
    div.style.top = '-20px';
    div.style.opacity = '0.9';
    div.style.transform = `translateY(0) rotate(${Math.random()*360}deg)`;
    div.style.position = 'fixed';
    div.style.zIndex = 9;
    div.style.borderRadius = '2px';
    document.body.appendChild(div);
    const fall = 120 + Math.random()*60;
    div.animate([
      { transform:`translateY(0) rotate(0deg)`, opacity:0.95 },
      { transform:`translateY(${window.innerHeight+60}px) rotate(${360+Math.random()*720}deg)`, opacity:0.1 }
    ], { duration: fall*30, easing:'cubic-bezier(.25,.46,.45,.94)' });
    setTimeout(()=> div.remove(), fall*30);
  }
}

// 按钮晃动
function wiggle(el) {
  el.animate([
    { transform:'translateX(0)' },
    { transform:'translateX(-6px)' },
    { transform:'translateX(6px)' },
    { transform:'translateX(-4px)' },
    { transform:'translateX(4px)' },
    { transform:'translateX(0)' }
  ], { duration: 480, easing:'ease-in-out' });
}

// 音乐控制
const musicBtn = document.getElementById('musicBtn');
const bgm = document.getElementById('bgm');
let playing = false;
musicBtn.addEventListener('click', async () => {
  try {
    if (!playing) {
      await bgm.play();
      playing = true;
      musicBtn.textContent = "暂停音乐 ⏸";
    } else {
      bgm.pause();
      playing = false;
      musicBtn.textContent = "播放浪漫音乐 🎵";
    }
  } catch(e) {
    console.log('播放受限，需要用户交互。');
  }
});

// 为打字光标添加闪烁
const styleExtra = document.createElement('style');
styleExtra.textContent = `.caret{display:inline-block;width:10px;animation:blink .9s infinite;}
@keyframes blink {0%,50%{opacity:1;}51%,100%{opacity:0;}}
.confetti{pointer-events:none;}`;
document.head.appendChild(styleExtra);