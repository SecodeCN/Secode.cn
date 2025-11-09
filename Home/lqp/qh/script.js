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

// 预设理由，加载时随机抽取 5 条显示
const allReasons = [
  '你的笑容可以治愈我一天的疲惫', '你认真听我说碎碎念的样子很可爱', '你会记得我喜欢的每一个小细节', '你生气也不舍得转身离开', '你愿意和我一起面对不确定的未来', '你会在意我没说出口的情绪', '你喜欢的颜色我已经慢慢喜欢', '你在时世界会自动降噪', '你不在时我开始收藏关于你的影子',
  '你对陌生人也很温柔', '你吃到好吃的第一反应是分享给我', '你睡着时会皱起的眉头让我想保护', '你醒来时迷糊的声音让我心动', '你会为小成就开心很久', '你会主动给我安全感', '你看星星的眼睛比星星亮', '你偶尔不自信的样子让我想拥抱', '你说“慢慢来”时我觉得被接住', '你握我的手总是刚刚好的力度',
  '你肯把过去告诉我', '你会认真听我讲没用的冷知识', '你发呆时我想偷偷画下来', '你会夸我哪怕很普通的小努力', '你会记得我们的每一个纪念日', '你在雨里撑伞会偏向我', '你愿意相信我说的“会好的”', '你会让我学会更温柔地表达', '你让我看到亲密可以不沉重',
  '你教我耐心也教我勇敢', '你在我崩溃前就能察觉', '你说“没关系”时是真心的', '你给我选择也给我空间', '你笑点低的样子让我想再讲一个', '你会在拥挤的地方找我的目光', '你愿意和我一起变老', '你用行动回应我的等待', '你不敷衍我的任何一个问题', '你会一起制定荒唐的计划',
  '你会问我今天有没有好好吃饭', '你会给我留下一盏灯', '你会和我讨论未来的房间怎么布置', '你会在意我家人', '你愿意一起自律也愿意一起放松', '你不擅长安慰却还是在尝试', '你会发来日出或晚霞的照片', '你让我觉得值得被爱', '你让我意识原来我也可以是依靠',
  '你让我开始喜欢整理生活', '你会认真回复我每一条消息', '你不完美但真诚', '你鼓励我去冒险', '你愿意接受我的不完美', '你会提醒我休息', '你让我看到生活不止重复', '你在我失去热情时轻轻推我一下', '你会分享你的焦虑让我靠近', '你问我“你真的开心吗”',
  '你会和我一起培养新的兴趣', '你不轻易评价别人', '你在我迟到时仍然微笑', '你愿意尝试我做得奇怪的菜', '你用眼神和我说“我在”', '你会在我不自信时拉我一把', '你陪我熬过的夜不只是黑', '你讲的故事我永远听不腻', '你对未来的想象里总有我', '你说“慢慢走不用赶”',
  '你叫我名字时有不同的语气', '你对我使用最柔软的耐心', '你和我吵架也不说伤人的话', '你让我更愿意面对自己的问题', '你会提前为我准备雨伞', '你会在我低落时发来表情包', '你说“早点睡”其实是担心', '你在我难过时递来的水是热的', '你喜欢抓我的衣角', '你在我谈梦想时不嘲笑',
  '你在我犯错时愿意给第二次机会', '你会认真看我发的长段文字', '你会把好看的句子念给我听', '你听到好听的歌会说我们一起听', '你会透过我的调侃看出我紧张', '你喜欢和我同步进度条', '你把我介绍给朋友时的认真', '你在我朋友圈下的回复永远不敷衍', '你会为我留下一块最喜欢的甜点', '你让我觉得世界很值得',
  '你让我更相信承诺的意义', '你会在我否定自己时温柔反驳', '你在很多选择里都选了“我们”', '你会对我说“谢谢”', '你让我不再害怕时间流动', '你在我沉默时陪着我', '你鼓励我表达真实感受', '你会在深夜说“睡吧我守着”', '你在我迟疑时说“我等你”', '你说“回家”时让我觉得幸福',
  '你让我开始规划很远的以后', '你是我重新喜欢上的世界', '你是我做很多决定的勇气', '你是我为明天设置闹钟的原因', '你是我想要分享的第一人', '你是我深呼吸时想到的安稳', '你是我写下清单的动力', '你是我看到未来时的轮廓', '你是我生活里最柔软的坚持', '你是我愿意倾诉的安全岛'
];

function renderReasons(){
  const ul = document.getElementById('reasonList');
  if(!ul) return;
  // 洗牌算法
  const arr = [...allReasons];
  for(let i=arr.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]] = [arr[j],arr[i]];
  }
  const picked = arr.slice(0,5);
  ul.innerHTML = picked.map(r => `<li>${r}</li>`).join('');
}
  // 弹窗标题候选（随机择一）
  const modalHeadings = [
    '我们一起开启永远 ❤️','从现在起携手到老 ❤️','这一刻开始写下我们的长篇 ❤️','把余生交给彼此守护 ❤️','未来的日子请多指教 ❤️','两个人的故事继续升级 ❤️','愿意与我共赴漫长光景吗 ❤️','此后风景都与你分享 ❤️','小家序章正式开始 ❤️','答应的瞬间记在心里 ❤️','愿把所有清晨和夜晚给你 ❤️'
  ];
  function pickModalHeading(){ return modalHeadings[Math.floor(Math.random()*modalHeadings.length)]; }
renderReasons();

// 可动态添加理由并自动重新随机（保留原数据）
function addReason(text){ if(text){ allReasons.push(text); renderReasons(); } }
// 示例（可注释）：// addReason('你让我愿意写下更多的未来计划');

// 时间轴数据与渲染（可在此修改或从后端获取）
let timelineData = [
  { title: '第一次相遇', text: '那天的光都在你眼里。', date: '2022-05-06' },
  { title: '第一次牵手', text: '掌心的温度让我确定。', date: '2022-06-12' },
  { title: '第一次旅行', text: '世界很大，和你在一起刚刚好。', date: '2023-03-21' },
  { title: '第一次争吵', text: '我们学会了更好地拥抱彼此。', date: '2023-08-02' },
  { title: '一起的目标', text: '把未来的小家布置成温柔的模样。', date: '2024-02-14' },
  { title: '此刻', text: '我准备好迈向永远。', date: new Date().toISOString().slice(0,10) }
];

function renderTimeline(){
  const wrap = document.getElementById('timelineSteps');
  if(!wrap) return;
  const sorted = [...timelineData].sort((a,b)=> new Date(a.date) - new Date(b.date));
  wrap.innerHTML = sorted.map((item, idx) => {
    const isLatest = idx === sorted.length - 1;
    return `<div class=\"step${isLatest?' latest':''}\" data-date=\"${item.date}\">`+
      `<div class=\"date-badge\">${formatDate(item.date)}</div>`+
      `<span>${item.title}</span><p>${item.text}</p></div>`;
  }).join('');
}
renderTimeline();
function formatDate(d){
  if(!d) return '';
  const [y,m,day] = d.split('-');
  return `${y}.${m}.${day}`;
}

// 滚动出现动画
function observeTimeline(){
  const steps = document.querySelectorAll('.timeline .step');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.style.transition = '600ms ease';
        e.target.style.transform = 'translateY(0)';
        e.target.style.opacity = '1';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  steps.forEach(s => {
    s.style.opacity = '0';
    s.style.transform = 'translateY(18px)';
    io.observe(s);
  });
}
observeTimeline();

// 动态添加事件函数（调用后自动重新渲染并高亮最新）
function addTimelineItem(title, text, date = new Date().toISOString().slice(0,10)) {
  timelineData.push({ title, text, date });
  renderTimeline();
  observeTimeline();
}
// 示例（可删除）：addTimelineItem('期待的未来', '我们的小家会充满花香与清晨的光。');

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
  feedback.textContent = pickYesResponse();
  launchConfetti();
  setTimeout(()=> { 
    const h3 = modal.querySelector('.modal-content h3');
    if(h3) h3.textContent = pickModalHeading();
    modal.classList.remove('hidden');
    startModalHearts();
  }, 900);
});

thinkBtn.addEventListener('click', () => {
  feedback.textContent = pickThinkResponse();
  renderReasons(); // 刷新随机理由列表
  wiggle(thinkBtn);
});

// 关闭弹窗反向动画
closeModal.addEventListener('click', () => {
  modal.classList.add('closing');
  modal.querySelector('.modal-content').addEventListener('animationend', () => {
    modal.classList.add('hidden');
    modal.classList.remove('closing');
  }, { once:true });
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

// 音乐控制增强 (整个面板作为按钮)
const audioControl = document.getElementById('musicPanel');
const bgm = document.getElementById('bgm');
let playing = false;

function syncState(){
  if(playing){
    audioControl.classList.add('playing');
  } else {
    audioControl.classList.remove('playing');
  }
}
async function playMusic(){
  try { await bgm.play(); playing=true; syncState(); } catch(e){ /* 忽略 */ }
}
function pauseMusic(){ bgm.pause(); playing=false; syncState(); }
audioControl.addEventListener('click',()=>{ playing?pauseMusic():playMusic(); });
window.addEventListener('DOMContentLoaded',()=>{ setTimeout(playMusic, 600); const once=()=>{ if(!playing) playMusic(); document.removeEventListener('click', once); document.removeEventListener('touchstart', once); }; document.addEventListener('click', once, { once:true }); document.addEventListener('touchstart', once, { once:true }); });
bgm.addEventListener('pause',()=>{ playing=false; syncState(); });
bgm.addEventListener('play',()=>{ playing=true; syncState(); });

// 为打字光标添加闪烁
const styleExtra = document.createElement('style');
styleExtra.textContent = `.caret{display:inline-block;width:10px;animation:blink .9s infinite;}
@keyframes blink {0%,50%{opacity:1;}51%,100%{opacity:0;}}
.confetti{pointer-events:none;}`;
document.head.appendChild(styleExtra);

// 日夜主题自动切换（早晨 8-17 点为日间，其余为夜间）
function applyTimeTheme(){
  const hour = new Date().getHours();
  const body = document.body;
  const target = (hour >= 8 && hour < 17) ? 'theme-day' : 'theme-night';
  if(!body.classList.contains(target)){
    body.classList.remove('theme-day','theme-night');
    body.classList.add(target);
  }
}
applyTimeTheme();
// 每小时重新评估（节省资源：设置间隔）
setInterval(applyTimeTheme, 60 * 60 * 1000);

// Modal 心形动态效果
function startModalHearts(){
  const container = document.getElementById('modalHearts');
  if(!container) return;
  container.innerHTML='';
  const total = 28;
  for(let i=0;i<total;i++){
    const span = document.createElement('span');
    span.className='modal-heart';
    span.textContent = Math.random()<0.5 ? '❤' : '💖';
    const x = 12 + Math.random()*76; // 百分比区域
    const delay = i * 0.12 + Math.random()*0.4;
    const size = 16 + Math.random()*18;
    span.style.left = x+'%';
    span.style.bottom = '-10px';
    span.style.fontSize = size+'px';
    span.style.animationDelay = delay+'s';
    container.appendChild(span);
  }
  // 音频响应标记
  container.classList.add('audio-react');
}

// 计算恋爱天数（示例起始日期，可修改为实际）
const relationshipStartDate = new Date('2025-07-12');
function updateDaysTogether(){
  const span = document.getElementById('daysTogether');
  if(!span) return;
  const today = new Date();
  const diffMs = today.setHours(0,0,0,0) - relationshipStartDate.setHours(0,0,0,0);
  const days = Math.max(1, Math.floor(diffMs / (1000*60*60*24))+1);
  span.textContent = days;
}
updateDaysTogether();

// --- 点击反馈文案：两个各 50 句 ---
const yesResponses = [
  '❤️ 这一刻像星星全都亮起，我要把余生的温柔都给你。', '我会记住你现在的眼神，把它放进未来的每个清晨。', '答应的那一瞬我听见心跳在鼓掌。', '我愿意也是我此生最坚定的誓言。', '从今天起“我们”这个词会越来越有重量。', '谢谢你选择和我一起写后面的章节。', '世界忽然安静，只剩下我们要走的路。', '我要学习怎样让你每天都笑得更放心。', '你点的这一声像点亮了一整个银河。', '我会用很多很多的时间来解释我的爱。',
  '你的答复是我所有等待的意义。', '以后再看到好风景，就不需要假装不遗憾了。', '我会把你的名字放在计划的最前面。', '幸福感正疯狂上涨，需要你抱一下稳定。', '这枚心已经永久改成你的收件地址。', '我们要开始累积属于自己的节日了。', '我愿意用笨拙也要认真地爱你。', '你让“未来”两个字充满细节。', '好多话想说但现在只想先看着你。', '我会把你的安全感当作最重要的日程。',
  '这一刻的光会陪我很久很久。', '余生的路我已经把方向设成你。', '我会认真练习如何成为你的避风港。', '你点头的样子是我新的珍藏。', '谢谢你让我的成长变得有目标。', '我想和你一起慢慢老到白发也还会笑。', '未来的每一次回家都要和你分享。', '我会记住今天作为新的纪念日。', '你的手比任何承诺更让我安心。', '我愿成为最了解你的那个人。',
  '我会小心翼翼也会勇敢热烈。', '这一刻连风都变成了祝福。', '我要让“你值得”变成每天的现实。', '你说愿意，我说余生交给我安排。', '从此我的计划里所有的“我”会改成“我们”。', '我会努力让每次拥抱都有值得。', '恭喜我们领取了彼此的未来使用权。', '我的心此刻正在打包所有的温柔给你。', '我想让你感到，被选中也是被珍惜。', '谢谢你给我往后所有的期待。',
  '你的答复让我更相信爱是具体的。', '我会让平凡的日子有花开的声音。', '我要认真记录你每个快乐的瞬间。', '我已经把“怀疑”这个选项拆掉了。', '我会在你疲惫的时候为你点亮灯。', '今天之后我会更努力做值得的人。', '你答应的声音像落在心里的一封信。', '这份幸福在我心里正铺满整片地图。', '我会和你一起把小家布置得很柔软。', '答应这件事本身就是最浪漫的语言。'
];

const thinkResponses = [
  '我愿再等你一会儿，因为你所有的认真都值得被尊重。', '如果犹豫是想确认幸福的质地，我会把答案都准备好。', '再想想也很好，我在这里，没打算走开。', '你可以慢一点，我会调成你的步频。', '我希望你的“愿意”是轻松而不是被催促的。', '所有的迟疑都会被耐心温柔包住。', '我会继续把爱意说得更清楚。', '你需要的安全感我会一点点建好。', '慢慢来，我们有很多时间。', '你的顾虑都可以说，我全部接住。',
  '犹豫说明你在珍惜，我也在珍惜你。', '不着急，把“确定”变得更踏实。', '我想让你看到的是可持续的温柔。', '你可以提出所有问题，我都愿回答。', '我的等待不是考验，是爱的组成部分。', '再想想的每一秒我都在喜欢你。', '我会让未来的画面更清晰给你看。', '你的心情今天由你主导，我做陪伴者。', '谢谢你认真对待我们的可能。', '如果怕失去，我就更用心不让你怕。',
  '请你放心，耐心是我现在最想展示的能力。', '我在把爱分装成容易理解的形状给你。', '你所有的犹豫不会被轻视。', '等你说“好”的那刻，我们就一起出发。', '我已经开始准备更具体的承诺。', '你的不确定是我需要照亮的地方。', '让时间帮我们过滤掉不安。', '我愿意把答案写得更长一些。', '不要害怕提要求，我会努力做到。', '我会把你担心的点逐一做成清单。',
  '等，是为了让你更安心地靠近。', '我也在用这段时间检视自己是否足够。', '我会让你看到我不是一时的热情。', '我的耐心不会有截止日期。', '若你暂时还没准备好，我就帮你准备。', '再想想也很浪漫，我们在酝酿。', '我想让你的决定带着笑意而不是压力。', '你值得一个被深度理解的承诺。', '我们可以一起拆解那些担心。', '让我用行动替代空洞的保证。',
  '你愿意花时间确认，我会陪着。', '任何时候回头我都在原地等。', '我已经开始写下我们可能的生活样子。', '别急，我会继续用细节回应你。', '你的犹豫是我们共同的课题，不是你的负担。', '我想让你感受到被等待也是一种被爱。', '当你准备好说“我愿意”时，我会第一时间接住。', '在你说“好”之前，我的喜欢不会缩减。', '你的节奏就是我们此刻的节奏。', '谢谢你认真权衡我们的未来。'
];

function pickYesResponse(){ return yesResponses[Math.floor(Math.random()*yesResponses.length)]; }
function pickThinkResponse(){ return thinkResponses[Math.floor(Math.random()*thinkResponses.length)]; }