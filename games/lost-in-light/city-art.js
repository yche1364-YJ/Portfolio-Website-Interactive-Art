/* Original code-drawn artwork. Flat shapes, selective neon, no generated background. */
window.drawCity=function(c){
 const P={ground:'#182d38',road:'#101e29',walk:'#344952',edge:'#688080',ink:'#10212c',roof:'#25414b',mint:'#83c6bc',warm:'#e5c38b',coral:'#e78c88',blue:'#8caed3'};
 function box(x,y,w,h,color,r=0){c.fillStyle=color;c.beginPath();c.roundRect(x,y,w,h,r);c.fill();}
 function path(points,color,width=2){c.beginPath();points.forEach((p,i)=>i?c.lineTo(...p):c.moveTo(...p));c.strokeStyle=color;c.lineWidth=width;c.lineCap='round';c.lineJoin='round';c.stroke();}
 function ellipse(x,y,rx,ry,color){c.fillStyle=color;c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);c.fill();}
 function text(t,x,y,size=14,color=P.mint,align='left'){c.font=`500 ${size}px 'Segoe UI',sans-serif`;c.textAlign=align;c.fillStyle=color;c.fillText(t,x,y);}
 function lamp(x,y){ellipse(x+6,y+9,31,9,'#0b1a2433');path([[x,y+6],[x,y-42],[x+8,y-49]],P.ink,5);ellipse(x+9,y-49,7,5,P.warm);ellipse(x+9,y-49,14,10,'#e5c38b0d');}
 function pot(x,y){ellipse(x+4,y+8,18,6,'#0b1a2444');box(x-8,y-5,16,17,'#a27564',3);ellipse(x,y-8,14,9,'#557b65');ellipse(x-5,y-14,8,7,'#6d9980');}
 function tree(x,y,scale=1){c.save();c.translate(x,y);c.scale(scale,scale);ellipse(16,20,47,16,'#08182455');path([[0,19],[0,-19],[-13,-37]],'#b29d7a',7);path([[0,-5],[15,-29]],'#b29d7a',4);ellipse(0,-44,43,27,'#315b59');ellipse(-18,-51,25,21,'#3d7066');ellipse(14,-57,27,19,'#558d76');ellipse(27,-39,23,16,'#427767');path([[-22,-62],[-7,-65]],'#8db397',2);c.restore();}
 function vent(x,y,w=44,h=27){box(x+3,y+4,w,h,'#152b35',3);box(x,y,w,h,'#4e6870',3);for(let i=7;i<w-3;i+=6)path([[x+i,y+6],[x+i,y+h-6]],'#2f4954',2);}
 function roof(x,y,w,h){box(x+9,y+15,w,h,'#081a2455',7);box(x,y,w,h,'#152c37',6);box(x+2,y+2,w-4,h-4,'#59757a',5);box(x+7,y+7,w-14,h-14,P.roof,2);path([[x+10,y+h-11],[x+w-11,y+h-11],[x+w-11,y+11]],'#172f39',3);path([[x+11,y+11],[x+w-12,y+11]],'#6a8585',2);}
 function window(x,y,w,h,lit=true){box(x-3,y-3,w+6,h+6,'#142a35',2);box(x,y,w,h,lit?P.warm:'#304e5b',1);path([[x+w/2,y],[x+w/2,y+h]],'#475450',2);path([[x,y+h*.55],[x+w,y+h*.55]],'#475450',2);}
 function awning(x,y,w,color){box(x,y,w,25,color,2);for(let j=0;j<w;j+=26){box(x+j,y,12,25,'#ddd0b5',1);}path([[x,y+25],[x+w,y+25]],'#132b36',3);}
 function sign(x,y,w,title,color=P.mint){box(x+3,y+4,w,35,'#10222b',3);box(x,y,w,35,'#162e39',3);c.strokeStyle=color;c.lineWidth=1;c.strokeRect(x+3,y+3,w-6,29);text(title,x+w/2,y+23,13,color,'center');}
 function facade(x,y,w,h,name,color){box(x+8,y+12,w,h,'#08182466',4);box(x,y,w,h,'#41606a',4);box(x+4,y+4,w-8,h-8,'#304d58',2);window(x+18,y+37,w*.34,h-52);window(x+w*.64,y+37,w*.25,h-52);box(x+w*.43,y+36,w*.15,h-36,'#172f3a');window(x+w*.455,y+45,w*.10,h-55,false);awning(x-3,y+12,w+6,color);sign(x+w*.2,y-29,w*.6,name,color);}
 box(0,0,1600,900,P.ground);
 // Broad continuous streets with two levels of curb and subtly worn lane paint.
 const roads=[[[0,410],[1600,410]],[[747,0],[747,900]],[[1318,0],[1318,900]],[[747,710],[1318,710]]];
 roads.forEach(p=>path(p,P.edge,140));roads.forEach(p=>path(p,P.walk,136));roads.forEach(p=>path(p,'#1e343e',112));roads.forEach(p=>path(p,P.road,106));
 c.setLineDash([20,25]);roads.forEach(p=>path(p,'#78888a55',3));c.setLineDash([]);
 // Walkways have sparse seams, rather than noisy texture.
 for(let x=28;x<675;x+=67){path([[x,342],[x,354]],'#71838544',1);path([[x,471],[x,479]],'#71838544',1);}
 function crossing(x,y,vertical){for(let i=-3;i<=3;i++){box(x+(vertical?-36:i*12),y+(vertical?i*12:-36),vertical?72:6,vertical?6:72,'#b9c8bd99',1);}}
 crossing(747,337,false);crossing(747,487,false);crossing(675,410,true);crossing(820,410,true);crossing(1318,337,false);crossing(1318,487,false);crossing(1247,410,true);crossing(1390,410,true);crossing(747,784,false);crossing(1318,784,false);
 // North-west block: two restrained storefronts, readable roofs, warm interiors.
 roof(38,-22,308,226);roof(367,-10,302,209);facade(45,209,292,103,'PAPER & MOON',P.mint);facade(374,203,284,109,'LATE COFFEE',P.coral);
 window(72,126,45,39,false);window(145,126,45,39);window(219,126,45,39,false);vent(260,29);vent(394,28,56,31);box(509,27,110,65,'#1a333e',3);path([[520,35],[609,35]],'#57727b',2);pot(342,320);pot(644,319);lamp(25,333);lamp(691,321);
 // North-east arcade: a graphic canopy and abstract neon icon rather than generated lettering.
 roof(837,-15,417,213);facade(845,210,402,101,'AFTER HOURS',P.blue);vent(873,31,58,30);vent(1190,37);box(984,41,116,65,'#35535d',4);path([[993,50],[1090,50],[1090,96]],'#66858a',2);sign(966,141,137,'PLAY / 24',P.coral);lamp(1219,330);pot(859,320);
 roof(1411,-20,210,212);facade(1414,211,200,101,'NIGHT NOODLES',P.warm);vent(1445,35);lamp(1563,326);
 // South-west block and quiet courtyard.
 roof(36,532,312,194);facade(43,737,297,113,'BLUE NOTE',P.coral);vent(74,559,55,31);vent(264,563);sign(130,649,107,'OPEN LATE',P.coral);
 box(382,539,283,305,'#263f46',10);box(396,553,255,276,'#344d50',5);for(let x=410;x<650;x+=44)path([[x,565],[x,816]],'#77908716',1);for(let y=565;y<830;y+=44)path([[405,y],[643,y]],'#77908716',1);tree(460,637,1.15);tree(592,747,.85);box(410,751,91,10,'#b4a080',2);path([[420,760],[420,773]],P.ink,3);path([[490,760],[490,773]],P.ink,3);lamp(695,565);pot(368,826);
 // Garden island between the streets: an intentional central focal point.
 box(839,508,407,129,'#3b5558',19);box(850,519,385,107,'#294846',13);ellipse(1040,574,56,31,'#547d6966');tree(1040,573,1.32);box(876,569,79,9,'#ae9a7d',2);box(876,587,79,6,'#927f69',2);box(1127,569,79,9,'#ae9a7d',2);box(1127,587,79,6,'#927f69',2);pot(858,610);pot(1226,610);lamp(835,648);lamp(1254,648);
 // Lower edge and right-hand buildings frame, rather than obscure, the route.
 roof(837,798,414,160);vent(878,836);vent(1180,845);box(990,830,111,70,'#324f5a',4);path([[1001,840],[1091,840]],'#67868c',2);
 roof(1411,534,210,185);facade(1417,731,198,114,'FLORA',P.mint);vent(1454,557);pot(1401,854);lamp(1566,550);
 // Small original street props and tightly controlled night accents.
 function bench(x,y){box(x,y,62,7,'#a58f72',2);box(x,y+12,62,6,'#a58f72',2);path([[x+7,y+18],[x+7,y+25]],'#142a35',3);path([[x+55,y+18],[x+55,y+25]],'#142a35',3);}
 bench(539,327);bench(1460,325);box(1214,312,23,38,'#b77772',3);box(1218,316,15,14,'#294752',1);ellipse(1225,339,3,3,P.warm);
 for(const [x,y,color] of [[198,327,P.mint],[520,327,P.coral],[1030,328,P.blue],[1515,326,P.warm]]){const g=c.createRadialGradient(x,y+46,0,x,y+46,80);g.addColorStop(0,color+'14');g.addColorStop(1,color+'00');c.fillStyle=g;c.fillRect(x-80,y,160,140);}
 text('OLD TOWN',48,496,10,'#80999b');text('GARDEN WALK',1050,654,10,'#91b0ac','center');
};
