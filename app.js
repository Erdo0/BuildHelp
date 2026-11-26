const parts = {
  GPU: ['Graphics cards','<rect x="5" y="13" width="77" height="33" rx="4"/><circle cx="26" cy="29" r="11"/><circle cx="61" cy="29" r="11"/><path d="m19 22 14 14m-14 0 14-14m21 0 14 14m-14 0 14-14M18 46v4h28v-4M3 10v40"/>','Choosing a graphics card','Start with your monitor','Use your target resolution and refresh rate to narrow the field. Compare benchmarks in the games you actually play.','Check the fit','Compare card length and thickness with case clearance, including any front radiator. Check power connectors against your power supply.'],
  CPU: ['Processors','<rect x="23" y="9" width="40" height="40" rx="4"/><rect x="30" y="16" width="26" height="26" rx="2"/><path d="M29 4v5m7-5v5m7-5v5m7-5v5m7-5v5M29 49v5m7-5v5m7-5v5m7-5v5m7-5v5M18 15h5m-5 7h5m-5 7h5m-5 7h5m-5 7h5m40-28h5m-5 7h5m-5 7h5m-5 7h5m-5 7h5"/>','Choosing The Best Budget CPU.','Match the processor to your workload','For a gaming build, compare frame times at your target refresh rate. For editing or compiling, compare completion times in the applications you use.','Compare the platform cost','Add the motherboard, memory, and cooler to the CPU price. For an upgrade, check the exact motherboard support list and required BIOS version before buying.'],
  Motherboard: ['Mainboards','<rect x="21" y="3" width="46" height="51" rx="2"/><path d="M24 7h7v23h-7zm12 6h15v15H36zm20-5v23m5-23v23M29 36h31v4H29zm0 9h20M35 7h14"/><circle cx="60" cy="47" r="3"/>','Picking a motherboard','Start with the socket','Look up your exact CPU in the board manufacturer’s support list and note the minimum BIOS version.','Map the connections','Count the M.2 slots, USB ports, fan headers, and expansion slots you need. Check the manual for bandwidth sharing.'],
  RAM: ['Memory kits','<g transform="rotate(-13 44 29)"><path d="M5 16h77v23H50v-3h-4v3H5z"/><path d="M12 21h10v10H12zm16 0h10v10H28zm16 0h10v10H44zm16 0h10v10H60zM11 39v4h32v-4m9 0v4h23v-4"/></g>','Selecting a memory kit','Choose the right generation','Check whether your motherboard takes DDR4 or DDR5. The modules use different slots.','Plan capacity first','Check memory use during your heaviest workload. Buy a matched kit with enough headroom, then use the slots recommended in the motherboard manual.'],
  Case: ['PC enclosures','<path d="m26 8 24-4 13 7v40l-24 4-13-7zM26 8l13 7 24-4M39 15v40M30 16l5 3v23l-5-3z"/><ellipse cx="51" cy="24" rx="7" ry="8"/><ellipse cx="51" cy="42" rx="7" ry="8"/>','Sizing up your PC case','Measure the hardware','Check motherboard form factor, graphics card length, cooler height, and power supply depth against the case specifications.','Plan airflow','Identify intake and exhaust positions. Leave space for filters, cables, and access to the ports you use every day.']
};
const dialog = document.querySelector('dialog');
function openGuide(key) {
  const [, , title, first, body, second, detail] = parts[key];
  dialog.querySelector('article').innerHTML = '<span class="tag">'+key.toUpperCase()+' GUIDE</span><h2>'+title+'</h2><h3>'+first+'</h3><p>'+body+'</p><h3>'+second+'</h3><p>'+detail+'</p>';
  dialog.showModal();
}
for (const [key,[label, drawing]] of Object.entries(parts)) {
  document.querySelector('#parts').insertAdjacentHTML('beforeend','<a href="#guide-'+key+'" data-read="'+key+'">'+key+'</a>');
  document.querySelector('#cards').insertAdjacentHTML('beforeend','<button class="card" data-read="'+key+'"><svg class="drawing" aria-hidden="true" viewBox="0 0 88 58" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round">'+drawing+'</svg><strong>'+key+'</strong><small>'+label+'</small></button>');
}
for (const key of ['CPU','GPU','Motherboard','RAM','Case']) {
  document.querySelector('#guideList').insertAdjacentHTML('beforeend','<button class="row" data-read="'+key+'">'+parts[key][2]+'<span class="tag">'+key.toUpperCase()+'</span></button>');
}
document.addEventListener('click', e=>{
  const link=e.target.closest('[data-read]');
  if(link){e.preventDefault();openGuide(link.dataset.read);}
});
dialog.querySelector('.close').onclick=()=>dialog.close();
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
