/* one-time Tomo seed, only fires with ?seed=1 and only when the bug list is empty */
if(location.search.indexOf('seed=1')>-1){(function(){
 var SEED=[
 {t:'Fast travel to Hidden Mist produces a gray empty world',b:'Two separate trips to the Hidden Mist Village rendered a gray, empty world: no avatar and no terrain visible. The HUD still showed full health (128/128) and chakra (96/96). Opening the map did not recover the scene. Traveling back to the Hidden Leaf Village restored the rendered scene and avatar, so a reload is not the only recovery.',s:'Travel from the Hidden Leaf to the Hidden Mist twice. Observe the gray empty world.',st:'open'},
 {t:'Character creator locks you into a new slot',b:'There is no Back button in the character creator. Escape does nothing, and reloading returns you to the unfinished creator. Game text reads: "Finish this shinobi to play. No backing out of a new slot."',s:'Start creating a new character, then try to back out with Escape or reload.',st:'open'},
 {t:'Hidden Cloud map, HUD and rendered scene disagree',b:'The map read "You are in the Hidden Cloud Village - home: Hidden Leaf", but the HUD still read "Hidden Leaf" and the scene rendered Leaf-style terrain and avatar.',s:'Fast travel between villages and compare the map text, HUD village label and the rendered scene.',st:'open'},
 {t:'Aburame Clans panel wording (unverified)',b:'Could not confirm whether the Clans panel still lists Insect Armor and pairs Insect Swarm, Bug Tracking and Chakra Drain with Shadow Bind as the signature move. HUD jutsu slot 4 currently reads "Shadow Bind - 30 chakra, 10s."',s:'Check the Aburame clan panel in Menu → Clans against the HUD jutsu slots.',st:'open'},
 {t:'Level and mastery persistence across reload (unverified)',b:'No level-up was gained during the latest pass, so persistence of changed level or mastery progress across reload remains unverified.',s:'Level up or raise a clan mastery, then reload and check the values.',st:'open'},
 {t:'Depleted chakra returned to full on reload',b:'After reloading, depleted chakra returned to full. Whether that is intended is unconfirmed.',s:'Use jutsu to lower chakra, reload the page, compare chakra values.',st:'open'}
 ];
 var NOW=new Date(Date.now()-9*86400000).toISOString();
 db.collection('community_bugs').where('tomoseed','==',true).limit(1).get().then(function(s){
 if(!s.empty){console.log('seed already done');return}
 var batch=db.batch();
 SEED.forEach(function(x){batch.set(db.collection('community_bugs').doc(),{game:'legacy',title:x.t,body:x.b,steps:x.s,status:x.st,author:'Tomo playtest (Nov 20 sweep)',tomoseed:true,when:NOW})});
 batch.commit().then(function(){console.log('seeded')}).catch(function(e){console.log('seed failed',e)})}).catch(function(e){console.log('seed check failed',e)})})()}
