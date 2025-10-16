document.addEventListener('DOMContentLoaded', () => {

    const RARITY_5_STAR_RATE = 0.016; // 4.6%
    const RARITY_4_STAR_RATE = 0.256; // 5.1%

    const SOFT_PITY_5_STAR_THRESHOLD = 75;
    const HARD_PITY_5_STAR_THRESHOLD = 90;
    const HARD_PITY_4_STAR_THRESHOLD = 10;

    const backgroundMusicPlaylist = [
        'audio/bgm1.mp3', 
        'audio/bgm2.mp3',
        'audio/bgm3.mp3',
        'audio/bgm4.mp3',
        'audio/bgm5.mp3',
        'audio/bgm6.mp3',
        'audio/bgm7.mp3',
        'audio/bgm8.mp3',
        'audio/bgm9.mp3',
        'audio/bgm10.mp3',
        'audio/bgm11.mp3',
        'audio/bgm12.mp3',
    ];

    const HSR_CHARACTERS = [
        // --- 5-STAR CHARACTERS ---
        {
            id: 'acheron',
            name: 'Acheron',
            rarity: 5,
            imageUrl: 'images/characters/acheron.webp'
        }, {
            id: 'bailu',
            name: 'Bailu',
            rarity: 5,
            imageUrl: 'images/characters/bailu.webp'
        }, {
            id: 'bronya',
            name: 'Bronya',
            rarity: 5,
            imageUrl: 'images/characters/bronya.webp'
        }, {
            id: 'fu_xuan',
            name: 'Fu Xuan',
            rarity: 5,
            imageUrl: 'images/characters/fu_xuan.webp'
        }, {
            id: 'himeko',
            name: 'Himeko',
            rarity: 5,
            imageUrl: 'images/characters/himeko.webp'
        },  {
            id: 'jingliu',
            name: 'Jingliu',
            rarity: 5,
            imageUrl: 'images/characters/jingliu.webp'
        }, {
            id: 'kafka',
            name: 'Kafka',
            rarity: 5,
            imageUrl: 'images/characters/kafka.webp'
        }, {
            id: 'clara',
            name: 'Clara',
            rarity: 5,
            imageUrl: 'images/characters/clara.webp'
        }, {
            id: 'seele',
            name: 'Seele',
            rarity: 5,
            imageUrl: 'images/characters/seele.webp'
        }, {
            id: 'silver_wolf',
            name: 'Silver Wolf',
            rarity: 5,
            imageUrl: 'images/characters/silver_wolf.webp'
        }, {
            id: 'topaz',
            name: 'Topaz',
            rarity: 5,
            imageUrl: 'images/characters/topaz.webp'
        }, {
            id: 'sparkle',
            name: 'Sparkle',
            rarity: 5,
            imageUrl: 'images/characters/sparkle.webp'
        }, {
            id: 'robin',
            name: 'Robin',
            rarity: 5,
            imageUrl: 'images/characters/robin.webp'
        }, {
            id: 'firefly',
            name: 'Firefly',
            rarity: 5,
            imageUrl: 'images/characters/firefly.webp'
        }, {
            id: 'castorice',
            name: 'Castorice',
            rarity: 5,
            imageUrl: 'images/characters/castorice.webp'
        }, {
            id: 'aglaea',
            name: 'Aglaea',
            rarity: 5,
            imageUrl: 'images/characters/aglaea.webp'
        }, {
            id: 'cipher',
            name: 'Cipher',
            rarity: 5,
            imageUrl: 'images/characters/cipher.webp'
        }, {
            id: 'hyacine',
            name: 'Hyacine',
            rarity: 5,
            imageUrl: 'images/characters/hyacine.webp'
        }, {
            id: 'the_herta',
            name: 'The Herta',
            rarity: 5,
            imageUrl: 'images/characters/the_herta.webp'
        }, {
            id: 'tribbie',
            name: 'Tribbie',
            rarity: 5,
            imageUrl: 'images/characters/tribbie.webp'
        }, {
            id: 'feixiao',
            name: 'Feixiao',
            rarity: 5,
            imageUrl: 'images/characters/feixiao.webp'
        }, {
            id: 'firefly',
            name: 'Firefly',
            rarity: 5,
            imageUrl: 'images/characters/firefly.webp'
        },

        // Wuthering Waves
        {
            id: 'zani',
            name: 'Zani',
            rarity: 5,
            imageUrl: 'images/characters/zani.webp'
        }, {
            id: 'camellya',
            name: 'Camellya',
            rarity: 5,
            imageUrl: 'images/characters/camellya.webp'
        }, {
            id: 'cantarella',
            name: 'Cantarella',
            rarity: 5,
            imageUrl: 'images/characters/cantarella.webp'
        }, {
            id: 'carlotta',
            name: 'Carlotta',
            rarity: 5,
            imageUrl: 'images/characters/carlotta.webp'
        }, {
            id: 'changli',
            name: 'Changli',
            rarity: 5,
            imageUrl: 'images/characters/changli.webp'
        }, {
            id: 'ciaccona',
            name: 'Ciaccona',
            rarity: 5,
            imageUrl: 'images/characters/ciaccona.webp'
        }, {
            id: 'encore',
            name: 'Encore',
            rarity: 5,
            imageUrl: 'images/characters/encore.webp'
        }, {
            id: 'jianxin',
            name: 'Jianxin',
            rarity: 5,
            imageUrl: 'images/characters/jianxin.webp'
        }, {
            id: 'jinhsi',
            name: 'Jinhsi',
            rarity: 5,
            imageUrl: 'images/characters/jinhsi.webp'
        }, {
            id: 'phoebe',
            name: 'Phoebe',
            rarity: 5,
            imageUrl: 'images/characters/phoebe.webp'
        }, {
            id: 'roccia',
            name: 'Roccia',
            rarity: 5,
            imageUrl: 'images/characters/roccia.webp'
        }, {
            id: 'female_rover',
            name: 'Female Rover',
            rarity: 5,
            imageUrl: 'images/characters/female_rover.webp'
        }, {
            id: 'shorekeeper',
            name: 'Shorekeeper',
            rarity: 5,
            imageUrl: 'images/characters/shorekeeper.webp'
        }, {
            id: 'verina',
            name: 'Verina',
            rarity: 5,
            imageUrl: 'images/characters/verina.webp'
        }, {
            id: 'yinlin',
            name: 'Yinlin',
            rarity: 5,
            imageUrl: 'images/characters/yinlin.webp'
        }, {
            id: 'zhezhi',
            name: 'Zhezhi',
            rarity: 5,
            imageUrl: 'images/characters/zhezhi.webp'
        },


        // Genshin impact

        {
            id: 'arlecchino',
            name: 'Arlecchino',
            rarity: 5,
            imageUrl: 'images/characters/arlecchino.webp'
        }, {
            id: 'ayaka',
            name: 'Ayaka',
            rarity: 5,
            imageUrl: 'images/characters/ayaka.webp'
        }, {
            id: 'chasca',
            name: 'Chasca',
            rarity: 5,
            imageUrl: 'images/characters/chasca.webp'
        }, {
            id: 'chiori',
            name: 'Chiori',
            rarity: 5,
            imageUrl: 'images/characters/chiori.webp'
        }, {
            id: 'citlali',
            name: 'Citlali',
            rarity: 5,
            imageUrl: 'images/characters/citlali.webp'
        }, {
            id: 'clorinde',
            name: 'Clorinde',
            rarity: 5,
            imageUrl: 'images/characters/clorinde.webp'
        }, {
            id: 'dehya',
            name: 'Dehya',
            rarity: 5,
            imageUrl: 'images/characters/dehya.webp'
        }, {
            id: 'emilie',
            name: 'Emilie',
            rarity: 5,
            imageUrl: 'images/characters/emilie.webp'
        }, {
            id: 'escoffier',
            name: 'Escoffier',
            rarity: 5,
            imageUrl: 'images/characters/escoffier.webp'
        }, {
            id: 'eula',
            name: 'Eula',
            rarity: 5,
            imageUrl: 'images/characters/eula.webp'
        }, {
            id: 'Furina5',
            name: 'Furina',
            rarity: 5,
            imageUrl: 'images/characters/furina5.webp'
        }, {
            id: 'ganyu',
            name: 'Ganyu',
            rarity: 5,
            imageUrl: 'images/characters/ganyu.webp'
        }, {
            id: 'jean',
            name: 'Jean',
            rarity: 5,
            imageUrl: 'images/characters/jean.webp'
        }, {
            id: 'hutao',
            name: 'Hu Tao',
            rarity: 5,
            imageUrl: 'images/characters/hutao.webp'
        }, {
            id: 'keqing',
            name: 'Keqing',
            rarity: 5,
            imageUrl: 'images/characters/keqing.webp'
        }, {
            id: 'kokomi',
            name: 'Kokomi',
            rarity: 5,
            imageUrl: 'images/characters/kokomi.webp'
        }, {
            id: 'mavuika',
            name: 'Mavuika',
            rarity: 5,
            imageUrl: 'images/characters/mavuika.webp'
        }, {
            id: 'mizuki',
            name: 'Mizuki',
            rarity: 5,
            imageUrl: 'images/characters/mizuki.webp'
        }, {
            id: 'mona',
            name: 'Mona',
            rarity: 5,
            imageUrl: 'images/characters/mona.webp'
        }, {
            id: 'mualani',
            name: 'Mualani',
            rarity: 5,
            imageUrl: 'images/characters/mualani.webp'
        }, {
            id: 'nahida',
            name: 'Nahida',
            rarity: 5,
            imageUrl: 'images/characters/nahida.webp'
        }, {
            id: 'navia',
            name: 'Navia',
            rarity: 5,
            imageUrl: 'images/characters/navia.webp'
        }, {
            id: 'nilou',
            name: 'Nilou',
            rarity: 5,
            imageUrl: 'images/characters/nilou.webp'
        },  {
            id: 'qiqi',
            name: 'Qiqi',
            rarity: 5,
            imageUrl: 'images/characters/qiqi.webp'
        }, {
            id: 'raiden',
            name: 'Raiden',
            rarity: 5, 
            imageUrl: 'images/characters/raiden.webp'
        }, {
            id: 'shenhe',
            name: 'Shenhe',
            rarity: 5, 
            imageUrl: 'images/characters/shenhe.webp'
        },  {
            id: 'varesa',
            name: 'Varesa',
            rarity: 5,
            imageUrl: 'images/characters/varesa.webp'
        }, {
            id: 'xianyun',
            name: 'Xianyun',
            rarity: 5,
            imageUrl: 'images/characters/xianyun.webp'
        }, {
            id: 'xilonen',
            name: 'Xilonen',
            rarity: 5,
            imageUrl: 'images/characters/xilonen.webp'
        }, {
            id: 'yae_miko',
            name: 'Yae Miko',
            rarity: 5,
            imageUrl: 'images/characters/yae_miko.webp'
        }, {
            id: 'yelan',
            name: 'Yelan',
            rarity: 5,
            imageUrl: 'images/characters/yelan.webp'
        }, {
            id: 'yoimiya',
            name: 'Yoimiya',
            rarity: 5,
            imageUrl: 'images/characters/yoimiya.webp'
        },


        
        // --- 4-STAR CHARACTERS ---
        {
            id: 'asta',
            name: 'Asta',
            rarity: 4,
            imageUrl: 'images/characters/asta.webp'
        }, {
            id: 'hook',
            name: 'Hook',
            rarity: 4,
            imageUrl: 'images/characters/hook.webp'
        }, {
            id: 'herta',
            name: 'Herta',
            rarity: 4,
            imageUrl: 'images/characters/herta.webp'
        }, {
            id: 'march_7th',
            name: 'March 7th',
            rarity: 4,
            imageUrl: 'images/characters/march_7th.webp'
        }, {
            id: 'natasha',
            name: 'Natasha',
            rarity: 4,
            imageUrl: 'images/characters/natasha.webp'
        }, {
            id: 'pela',
            name: 'Pela',
            rarity: 4,
            imageUrl: 'images/characters/pela.webp'
        }, {
            id: 'qingque',
            name: 'Qingque',
            rarity: 4,
            imageUrl: 'images/characters/qingque.webp'
        }, {
            id: 'serval',
            name: 'Serval',
            rarity: 4,
            imageUrl: 'images/characters/serval.webp'
        }, {
            id: 'sushang',
            name: 'Sushang',
            rarity: 4,
            imageUrl: 'images/characters/sushang.webp'
        }, {
            id: 'tingyun',
            name: 'Tingyun',
            rarity: 4,
            imageUrl: 'images/characters/tingyun.webp'
        }, {
            id: 'yukong',
            name: 'Yukong',
            rarity: 4,
            imageUrl: 'images/characters/yukong.webp'
        },{
            id: 'lynx',
            name: 'Lynx',
            rarity: 4,
            imageUrl: 'images/characters/lynx.webp'
        }, {
            id: 'guinaifen',
            name: 'Guinaifen',
            rarity: 4,
            imageUrl: 'images/characters/guinaifen.webp'
        }, {
            id: 'hanya',
            name: 'Hanya',
            rarity: 4,
            imageUrl: 'images/characters/hanya.webp'
        }, {
            id: 'xueyi',
            name: 'Xueyi',
            rarity: 4,
            imageUrl: 'images/characters/xueyi.webp'
        }, {
            id: 'misha',
            name: 'Misha',
            rarity: 4,
            imageUrl: 'images/characters/misha.webp'
        }, {
            id: 'furina',
            name: 'Furina',
            rarity: 4,
            imageUrl: 'images/characters/furina.webp'
        }, 

        // Wuthering Waves //
        {
            id: 'baizhi',
            name: 'Baizhi',
            rarity: 4,
            imageUrl: 'images/characters/baizhi.webp'
        }, {
            id: 'chixia',
            name: 'Chixia',
            rarity: 4,
            imageUrl: 'images/characters/chixia.webp'
        }, {
            id: 'danjin',
            name: 'Danjin',
            rarity: 4,
            imageUrl: 'images/characters/danjin.webp'
        }, {
            id: 'lumi',
            name: 'Lumi',
            rarity: 4,
            imageUrl: 'images/characters/lumi.webp'
        }, {
            id: 'sanhua',
            name: 'Sanhua',
            rarity: 4,
            imageUrl: 'images/characters/sanhua.webp'
        }, {
            id: 'taoqi',
            name: 'Taoqi',
            rarity: 4,
            imageUrl: 'images/characters/taoqi.webp'
        }, {
            id: 'yangyang',
            name: 'Yangyang',
            rarity: 4,
            imageUrl: 'images/characters/yangyang.webp'
        }, {
            id: 'youhu',
            name: 'Youhu',
            rarity: 4,
            imageUrl: 'images/characters/youhu.webp'
        }, {
            id: 'carte',
            name: 'Cartethyia',
            rarity: 4,
            imageUrl: 'https://scontent.fbdj1-1.fna.fbcdn.net/v/t39.30808-6/493603308_1080413374108385_5344725688777020195_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFTfuLtoAffg_bvF_3HOnGUaVVYf02Ap8xpVVh_TYCnzJxW00VDFJW8chbEzwdS-7gcnUDiSr_S1q6PAWX-fcp7&_nc_ohc=QTGq2A0mWhMQ7kNvwGdydKz&_nc_oc=AdlDGrUSOF-inNYUrd3FBquesUkckgSVd0KiuqJ-ho0LHCsZDcYnoRz7KTYuOXRfAYQ&_nc_zt=23&_nc_ht=scontent.fbdj1-1.fna&_nc_gid=h4QkpCk1U5Tcsdos3TiMog&oh=00_Afd0s9s6NJm6bFhBPFm87TnROZnI2tUXyOUlQ1-pYAPRfw&oe=68F74458'
        }, 
        
        // Genshin Impat

         {
            id: 'faruzan',
            name: 'Faruzan',
            rarity: 4,
            imageUrl: 'https://upload-os-bbs.hoyolab.com/upload/2023/10/16/146697574/fe6389f3ec94c53f4950c2331994c273_1619437479216865355.jpg'
        },  {
            id: 'fischl',
            name: 'fischl',
            rarity: 4,
            imageUrl: 'https://i.pinimg.com/736x/ff/d5/57/ffd557b6725393e66540f753ac000d2c.jpg'
        },  {
            id: 'lisa',
            name: 'Lisa',
            rarity: 4,
            imageUrl: 'https://i.pinimg.com/564x/3a/65/d5/3a65d51a147105c30a33e6946c730cc5.jpg'
        },  {
            id: 'ningguang',
            name: 'Ningguang',
            rarity: 4,
            imageUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/e/e0/Ningguang_Icon.png/revision/latest?cb=20220210040239'
        }, 
        


        // 3 star lc //
        {
            id: '3_star_lc_1',
            name: '3-Star Light Cone A',
            rarity: 3,
            imageUrl: 'images/default_avatar.webp'
        }, {
            id: '3_star_lc_2',
            name: '3-Star Light Cone B',
            rarity: 3,
            imageUrl: 'images/default_avatar.webp'
        }, {
            id: '3_star_lc_3',
            name: '3-Star Light Cone C',
            rarity: 3,
            imageUrl: 'images/default_avatar.webp'
        }, {
            id: '3_star_lc_4',
            name: '3-Star Light Cone D',
            rarity: 3,
            imageUrl: 'images/default_avatar.webp'
        }, {
            id: '3_star_lc_5',
            name: '3-Star Light Cone E',
            rarity: 3,
            imageUrl: 'images/default_avatar.webp'
        }, {
            id: '3_star_lc_6',
            name: '3-Star Light Cone F',
            rarity: 3,
            imageUrl: 'images/default_avatar.webp'
        }, {
            id: '3_star_lc_7',
            name: '3-Star Light Cone G',
            rarity: 3,
            imageUrl: 'images/default_avatar.webp'
        }, {
            id: '3_star_lc_8',
            name: '3-Star Light Cone H',
            rarity: 3,
            imageUrl: 'images/default_avatar.webp'
        }
    ];



    const CHARACTERS_5_STAR = HSR_CHARACTERS.filter(c => c.rarity === 5);
    const CHARACTERS_4_STAR = HSR_CHARACTERS.filter(c => c.rarity === 4);
    const GENERIC_3_STAR = HSR_CHARACTERS.filter(c => c.rarity === 3);

    const pullButton = document.getElementById('pullButton');
    const pull10Button = document.getElementById('pull10Button');
    const pullResultsDiv = document.getElementById('pullResults');
    const characterInventoryDiv = document.getElementById('characterInventory');
    const clearResultsButton = document.getElementById('clearResultsButton');
    const clearInventoryButton = document.getElementById('clearInventoryButton');
    const resetStatsButton = document.getElementById('resetStatsButton'); 
    const totalPullsDisplay = document.getElementById('totalPullsDisplay');
    const pityCountDisplay = document.getElementById('pityCountDisplay');
    const previousPityDisplay = document.getElementById('previousPityDisplay');
    const total5StarDisplay = document.getElementById('total5StarDisplay'); 
    const total4StarDisplay = document.getElementById('total4StarDisplay');

    const clickSFX = document.getElementById('clickSFX');
    const backgroundMusic = document.getElementById('backgroundMusic');

    let hasUserInteracted = false;

    let totalPulls = parseInt(localStorage.getItem('totalPulls')) || 0;
    let pityCount = parseInt(localStorage.getItem('pityCount')) || 0;
    let pity4StarCount = parseInt(localStorage.getItem('pity4StarCount')) || 0;
    let previousPity = parseInt(localStorage.getItem('previousPity')) || 0;
    let total5StarCharacters = parseInt(localStorage.getItem('total5StarCharacters')) || 0;
    let total4StarCharacters = parseInt(localStorage.getItem('total4StarCharacters')) || 0;

    const characterInventory = new Map(
        JSON.parse(localStorage.getItem('hsrCharacterInventory')) || []
    );
    

    function saveStats() {
        localStorage.setItem('totalPulls', totalPulls);
        localStorage.setItem('pityCount', pityCount);
        localStorage.setItem('pity4StarCount', pity4StarCount);
        localStorage.setItem('previousPity', previousPity);
        localStorage.setItem('total5StarCharacters', total5StarCharacters); 
        localStorage.setItem('total4StarCharacters', total4StarCharacters);
    }


    function updateDisplay() {
        totalPullsDisplay.textContent = totalPulls;
        pityCountDisplay.textContent = pityCount;
        previousPityDisplay.textContent = previousPity;
        total5StarDisplay.textContent = total5StarCharacters;
        total4StarDisplay.textContent = total4StarCharacters;

    
        const inventoryGrid = document.getElementById('characterInventory');
    if (characterInventory.size === 0) {
        if (!inventoryGrid.querySelector('.initial-message')) {
            inventoryGrid.innerHTML = '<p class="initial-message">Belum ada karakter dalam koleksi Anda. Pull sekarang!</p>';
        }
    } else {
        const initialMessage = inventoryGrid.querySelector('.initial-message');
        if (initialMessage) {
            initialMessage.remove();
        }
    }

    }

    function saveInventory() {
        localStorage.setItem(
            'hsrCharacterInventory',
            JSON.stringify(Array.from(characterInventory.entries()))
        );
    }

    function getPulledCharacter() {
        
        if (pityCount + 1 === HARD_PITY_5_STAR_THRESHOLD) {
            console.log("Hard Pity 5-Star reached!");
            return CHARACTERS_5_STAR[Math.floor(Math.random() * CHARACTERS_5_STAR.length)];
        }

        
        if (pity4StarCount + 1 === HARD_PITY_4_STAR_THRESHOLD) {
            console.log("Hard Pity 4-Star reached!");
            return CHARACTERS_4_STAR[Math.floor(Math.random() * CHARACTERS_4_STAR.length)];
        }

        let current5StarRate = RARITY_5_STAR_RATE; 

        if (pityCount >= SOFT_PITY_5_STAR_THRESHOLD) {
            
            current5StarRate += (pityCount - SOFT_PITY_5_STAR_THRESHOLD + 1) * 0.06;
            current5StarRate = Math.min(current5StarRate, 1.0);
            console.log(`Soft Pity: Pull ${pityCount + 1}, New 5-star rate: ${(current5StarRate * 100).toFixed(2)}%`);
        }

        const rand = Math.random();

        if (rand < current5StarRate) {
            return CHARACTERS_5_STAR[Math.floor(Math.random() * CHARACTERS_5_STAR.length)];
        } else if (rand < (current5StarRate + RARITY_4_STAR_RATE)) { 
            return CHARACTERS_4_STAR[Math.floor(Math.random() * CHARACTERS_4_STAR.length)];
        } else {
            return GENERIC_3_STAR[Math.floor(Math.random() * GENERIC_3_STAR.length)];
        }
    }

    function createCharacterCard(character, isNew = false) {
        const card = document.createElement('div');
        card
            .classList
            .add('character-card', `rarity-${character.rarity}`);

        let newBadge = '';

        if (isNew && character.rarity > 3) {
            newBadge = '<span class="new-badge">NEW!</span>';
        }

        card.innerHTML = `
            <img src="${character.imageUrl}" alt="${character.name}">
            <h3>${character.name}</h3>
            <p class="rarity">Rarity: ${character.rarity}-Star</p>
            ${newBadge}
        `;
        return card;
    }

    function updateCharacterInventory(character) {
        if (character.rarity >= 4) {
            const currentCount = characterInventory.get(character.id) || 0;
            characterInventory.set(character.id, currentCount + 1);
            saveInventory();
            renderCharacterInventory();
        }
    }

    function renderCharacterInventory() {
        characterInventoryDiv.innerHTML = '';
        const initialMessage = characterInventoryDiv.querySelector('.initial-message');
        if (initialMessage) {
            initialMessage.remove();
        }

        if (characterInventory.size === 0) {
            characterInventoryDiv.innerHTML = '<p class="initial-message">Belum ada karakter dalam koleksi Anda. Pull sekarang!</p>';
            return;
        }

        const validCharactersInInventory = Array
            .from(characterInventory.keys())
            .map(charId => {
                const char = HSR_CHARACTERS.find(c => c.id === charId);
                if (!char) {
                    console.warn(`Karakter dengan ID ${charId} ditemukan di inventaris tetapi tidak ada di daftar HSR_CHARACTERS. Mengabaikan.`);
                    return null;
                }
                return {
                    ...char,
                    count: characterInventory.get(charId)
                };
            })
            .filter(item => item !== null)
            const characters5Star = validCharactersInInventory.filter(char => char.rarity === 5);
            const characters4Star = validCharactersInInventory.filter(char => char.rarity === 4);

            const customSort = (a, b) => {
            if (b.count !== a.count) {
                return b.count - a.count;
            }
            return a.name.localeCompare(b.name);
        };

        characters5Star.sort(customSort);
        characters4Star.sort(customSort);

        const sortedCharacters = [...characters5Star, ...characters4Star];

        sortedCharacters.forEach(item => {
            const card = createCharacterCard(item);
            const countSpan = document.createElement('span');
            countSpan
                .classList
                .add('item-count');
            countSpan.textContent = ` x${item.count}`;
            card
                .querySelector('h3')
                .appendChild(countSpan);
            characterInventoryDiv.appendChild(card);
        });
    }

    async function performPull(numPulls) {
        pullResultsDiv.innerHTML = '';
        const initialMessage = pullResultsDiv.querySelector('.initial-message');
        if (initialMessage) {
            initialMessage.remove();
        }

        const pulledCharacters = [];
        for (let i = 0; i < numPulls; i++) {
            totalPulls++;
            pityCount++;
            pity4StarCount++; 

            const character = getPulledCharacter();
            pulledCharacters.push(character);

            if (character.rarity === 5) {
                total5StarCharacters++
                previousPity = pityCount;
                pityCount = 0; 
                pity4StarCount = 0; 
                console.log("Got 5-star! Pity reset.");
            } else if (character.rarity === 4) {
                total4StarCharacters++
                pity4StarCount = 0;
                console.log("Got 4-star! 4-star pity reset.");
            }
        }

        for (const character of pulledCharacters) {
            const isNew = !characterInventory.has(character.id) && character.rarity > 3;

            const card = createCharacterCard(character, isNew);
            pullResultsDiv.appendChild(card);

            updateCharacterInventory(character);

            pullResultsDiv.scrollTop = pullResultsDiv.scrollHeight;

            await new Promise(resolve => setTimeout(resolve, 300));
        }
        updateDisplay();
        saveStats();
    }
    
    function playNextSong() {
        if (backgroundMusicPlaylist.length === 0) {
            console.warn("Daftar putar musik latar kosong.");
            return;
        }

        const randomIndex = Math.floor(Math.random() * backgroundMusicPlaylist.length);
        backgroundMusic.src = backgroundMusicPlaylist[randomIndex];
        backgroundMusic.play().then(() => {
            console.log(`Memutar secara acak: ${backgroundMusicPlaylist[randomIndex]}`);
        }).catch(e => {
            console.error("Gagal memutar musik latar secara acak:", e);
        });
    }

    function handleFirstInteraction() {
        if (!hasUserInteracted) {
            backgroundMusic.muted = false;
            playNextSong();
            hasUserInteracted = true;
        }
    }

    pullButton.addEventListener('click', () => {
        handleFirstInteraction();
        clickSFX.volume = 0.5;
        clickSFX.currentTime = 0;
        clickSFX
            .play()
            .catch(e => console.warn("Gagal memutar click SFX:", e));
        performPull(1);
    });

    pull10Button.addEventListener('click', () => {
        handleFirstInteraction();
        clickSFX.volume = 0.5;
        clickSFX.currentTime = 0;
        clickSFX
            .play()
            .catch(e => console.warn("Gagal memutar click SFX:", e));
        performPull(10);
    });

    clearResultsButton.addEventListener('click', () => {
        handleFirstInteraction();
        pullResultsDiv.innerHTML = '<p class="initial-message">Tekan tombol \'Pull\' untuk memulai!</p>';
    });

    clearInventoryButton.addEventListener('click', () => {
        handleFirstInteraction();
        if (confirm('Apakah Anda yakin ingin menghapus semua karakter dari koleksi?')) {
            characterInventory.clear();
            saveInventory();
            renderCharacterInventory();
            alert('Koleksi karakter berhasil dihapus!');
        }
    });

    
    if (resetStatsButton) { 
        resetStatsButton.addEventListener('click', () => {
            handleFirstInteraction();
            if (confirm('Apakah Anda yakin ingin mereset semua statistik Pull dan Pity? Ini tidak akan menghapus Inventory Karakter Anda.')) {
                totalPulls = 0;
                pityCount = 0;
                pity4StarCount = 0;
                total4StarCharacters = 0;
                total5StarCharacters = 0;
                saveStats();
                updateDisplay();
                alert('Statistik Pull dan Pity berhasil direset!');
            }
        });
    }
    
    updateDisplay();
    renderCharacterInventory();
    saveStats();

    if (backgroundMusic) {
        backgroundMusic.play().then(() => {
            console.log("BGM muted autoplay attempted.");
        }).catch(e => {
            console.warn("Muted autoplay BGM blocked, waiting for user interaction.", e);
        });
    } else {
        console.error("Elemen audio BGM dengan ID 'backgroundMusic' tidak ditemukan!");
    }
    if (backgroundMusic) {
        backgroundMusic.addEventListener('ended', () => {
            playNextSong();
        });
    }

});
