document.addEventListener('DOMContentLoaded', () => {

    const RARITY_5_STAR_RATE = 0.036; // 4.6%
    const RARITY_4_STAR_RATE = 0.391; // 5.1%

    const SOFT_PITY_5_STAR_THRESHOLD = 74;
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

    const clickSFX = document.getElementById('clickSFX');
    const backgroundMusic = document.getElementById('backgroundMusic');

    let hasUserInteracted = false;

    let totalPulls = parseInt(localStorage.getItem('totalPulls')) || 0;
    let pityCount = parseInt(localStorage.getItem('pityCount')) || 0;
    let pity4StarCount = parseInt(localStorage.getItem('pity4StarCount')) || 0;
    let previousPity = parseInt(localStorage.getItem('previousPity')) || 0;

    const characterInventory = new Map(
        JSON.parse(localStorage.getItem('hsrCharacterInventory')) || []
    );

    function saveStats() {
        localStorage.setItem('totalPulls', totalPulls);
        localStorage.setItem('pityCount', pityCount);
        localStorage.setItem('pity4StarCount', pity4StarCount);
        localStorage.setItem('previousPity', previousPity);
    }


    function updatePityDisplay() {
        totalPullsDisplay.textContent = totalPulls;
        
        pityCountDisplay.textContent = pityCount + 0;
        previousPityDisplay.textContent = previousPity;

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

        const sortedCharacters = Array
            .from(characterInventory.keys())
            .map(charId => {
                const char = HSR_CHARACTERS.find(c => c.id === charId);
                return {
                    ...char,
                    count: characterInventory.get(charId)
                };
            })
            .sort((a, b) => {
                if (b.rarity !== a.rarity) {
                    return b.rarity - a.rarity;
                }
                return a
                    .name
                    .localeCompare(b.name);
            });

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
                previousPity = pityCount;
                pityCount = 0; 
                pity4StarCount = 0; 
                console.log("Got 5-star! Pity reset.");
            } else if (character.rarity === 4) {
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
        updatePityDisplay();
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
                saveStats();
                updatePityDisplay();
                alert('Statistik Pull dan Pity berhasil direset!');
            }
        });
    }

    
    renderCharacterInventory();
    updatePityDisplay();
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