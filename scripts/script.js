// script.js
   
        // replace with actual data
        const muscles = {
            pectoralis_major: {
                name: "Pectoralis Major",
                image: "https://www.kenhub.com/thumbor/rd8CbMjXA6gntGs93sl8EYIc6lI=/fit-in/800x1600/filters:watermark(/images/logo_url.png,-10,-10,0):background_color(FFFFFF):format(jpeg)/images/library/13535/Wt6B7qUeKq5WqFGlzsQ_Musculus_pectoralis_major_01.png", // Kenhub
                imageAlt: "Pectoralis Major muscle anatomy",
                audio: "https://dict.youdao.com/dictvoice?audio=pectoralis%20major&type=2", // Pronunciation audio
                translation: "胸大肌",
                memoryAid: "Imagine hugging a tree – your chest contracts.",
                origin: "Clavicle, sternum, and cartilage of ribs 1-6.",
                insertion: "Lateral lip of the bicipital groove of humerus.",
                joint: "Shoulder",
                movement: "Adducts and medially rotates the arm.",
                exercises: [
                    { name: "Bench Press", gif: "https://media.giphy.com/media/z1Suqc2f0GCPReDgUB/giphy.webp", gifAlt: "Bench press exercise GIF" },
                    { name: "Push-ups", gif: "https://i.gifer.com/origin/53/5316230e06f72b22c318f49aee7d6051_w200.webp", gifAlt: "Push-up exercise GIF" },
                    { name: "Chest Fly", gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDZub245MWszN3d2Zmh2eXc2bWd2ZGkyOGQwd2p4cHh1ZG5xZng0cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/p7pdjwU326xHTaDiHG/giphy.webp", gifAlt: "Chest fly exercise GIF"}
                ]
            },
            deltoid: {
                name: "Deltoid",
                image: "https://www.kenhub.com/thumbor/Si1vuP8MMgFOchicWEn_Vt4qzX0=/fit-in/800x1600/filters:watermark(/images/logo_url.png,-10,-10,0):background_color(FFFFFF):format(jpeg)/images/library/13537/ZjXqXLfFvjRqzu4Ue14DA_degvezVumJ_M._deltoideus_2.png", // kenhub
                imageAlt: "Deltoid muscle anatomy",
                audio: "https://dict.youdao.com/dictvoice?audio=deltoid&type=2", // Pronunciation audio
                translation: "三角肌",
                memoryAid: "Think of a shoulder pad – covers the shoulder.",
                origin: "Clavicle, acromion, and spine of scapula.",
                insertion: "Deltoid tuberosity of humerus.",
                joint: "Shoulder",
                movement: "Abducts, flexes, and extends the arm.",
                exercises: [
                    { name: "Shoulder Press", gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2o3c3U5aWN0M2ljYTU2cTA0NTlyYmQ4amZ5a3BuMjhrcDNvazJqMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gIxeFoOB3xBEeviCn8/200.webp", gifAlt: "Shoulder press exercise GIF" },
                    { name: "Lateral Raise", gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnV6YWE2eXphMmU4aHMzZnY4MHo5MTNjMGYxcWs3YWRlY21sNXo1biZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mkzzJZXQcUZ9SnuKmS/giphy.webp", gifAlt: "Lateral raise exercise GIF" },
                    { name: "Front Raise", gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGZieWUzY2RueWh0amhmb3FrZHBhYjI1bTQxNjk3NzRwMmk2Ynk5ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/FfJxatjLUw6S5MZIzq/200.webp", gifAlt: "Front raise exercise GIF" }
                                    ]
                
            },
            latissimus_dorsi: {
                name: "Latissimus Dorsi",
                image: "https://www.kenhub.com/thumbor/0D0BWznU7YoSxClaXA5eHDVdiB0=/fit-in/800x1600/filters:watermark(/images/logo_url.png,-10,-10,0):background_color(FFFFFF):format(jpeg)/images/library/13441/IrtirBf6PsVLImfncXQHWQ_Musculus_latissimus_dorsi_1.png", // Kenhub
                imageAlt: "Latissimus Dorsi muscle anatomy",
                audio: "https://dict.youdao.com/dictvoice?audio=latissimus%20dorsi&type=2", // Pronunciation audio
                translation: "背阔肌",
                memoryAid: "Wings on your back – helps you pull.",
                origin: "Spinous processes of T7-L5, iliac crest, lower ribs.",
                insertion: "Intertubercular groove of humerus.",
                joint: "Shoulder",
                movement: "Extends, adducts, and medially rotates the arm.",
                exercises: [
                    { name: "Pull-ups", gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDU5MzV1NmQ3MDVsdDJxYXU0b3oycnA0Nzd4dHUyYjByaDk5cHA1NSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/EzlBTmRv3uLcRMsLvU/200.webp", gifAlt: "Pull-up exercise GIF" },
                    { name: "Lat Pulldown", gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnFvbHMwcnlkejVra3U3cHp6YWxpaGtxdzkyMXM3eTU1cW8wd3JmcCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OY5m6122mwfMoNqqpm/200.webp", gifAlt: "Lat pulldown exercise GIF" },
                    { name: "Rows", gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGtucWgyMDlwMTlmanJ4N3FxcXNpMnJicjZ6NTM3aTdhdWVqN3JubiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/UUn6oTupFoo0T9g6jS/200.webp", gifAlt: "Row exercise GIF" }
                ]
                
            },
            // All sidebar muscles are now defined below.
            trapezius: {
                name: "Trapezius",
                image: "https://www.kenhub.com/thumbor/PHl0rxQsyQTGTNHGqJGsKE7X-QE=/fit-in/800x1600/filters:watermark(/images/logo_url.png,-10,-10,0):background_color(FFFFFF):format(jpeg)/images/library/13911/trapezius_muscle.png", // Kenhub
                imageAlt: "Trapezius muscle anatomy",
                audio: "https://dict.youdao.com/dictvoice?audio=trapezius&type=2", // Pronunciation audio
                translation: "斜方肌",
                memoryAid: "Diamond-shaped muscle on upper back.",
                origin: "Occipital bone, ligamentum nuchae, spinous processes C7-T12.",
                insertion: "Clavicle, acromion, and spine of scapula.",
                joint: "Scapula",
                movement: "Elevates, retracts, and rotates scapula.",
                exercises: [
                    { name: "Shrugs", gif: "https://cdn.jefit.com/assets/img/exercises/gifs/42.gif", gifAlt: "Shrug exercise GIF" },
                    { name: "Face Pulls", gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3B5ZnpoMXNveDM1NXNsZGttNDYzYXBqZzl0ZGUybnozbXdqY254dyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/RtQGbdJmnbUktIPO9f/giphy.webp", gifAlt: "Face Pulls exercise" },
                    { name: "Upright Row", gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExanRldXVuZ3E1dXdnNjRwemZnbjhpcmE2YjZxMTlucG9iOGZsOHVqaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/HcAEBNMDfyfOq0PscZ/200.webp", gifAlt: "Upright Row exercise" }
                ]
            },
            rhomboids: {
                name: "Rhomboids",
                image: "https://www.kenhub.com/thumbor/5hExsqglwm85F6q6-DyQVDlY26s=/fit-in/413x413/filters:fill(FFFFFF,true):watermark(/images/watermark_only_413.png,0,0,0):watermark(/logos/logo_url_sm.png,-10,-10,0):format(jpeg)/images/learnable/rhomboid-major-muscle/AfbeHMvYMNnRLp9DgOAJpw_Rhomboid_major.png", // Kenhub
                imageAlt: "Rhomboid muscles anatomy",
                audio: "https://dict.youdao.com/dictvoice?audio=rhomboids&type=2", // Pronunciation audio
                translation: "菱形肌",
                joint: "Scapula",
                memoryAid: "Pulling shoulder blades together.",
                origin: "Spinous processes of C7-T5.",
                insertion: "Medial border of scapula.",
                movement: "Retracts and elevates scapula.",
                exercises: [
                    { name: "Rows", gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGtucWgyMDlwMTlmanJ4N3FxcXNpMnJicjZ6NTM3aTdhdWVqN3JubiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/UUn6oTupFoo0T9g6jS/200.webp", gifAlt: "Row exercise GIF" },
                    { name: "Reverse Fly", gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDQxcWkzaDl2NXp1ODJidW1jZXd3bXc1ZmFuN2l4Nmo3d2g3M3poaiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/zBvSThvnE0Cj2ikfTC/200.webp", gifAlt: "Reverse Fly exercise" },
                    { name: "Face Pulls", gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3B5ZnpoMXNveDM1NXNsZGttNDYzYXBqZzl0ZGUybnozbXdqY254dyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/RtQGbdJmnbUktIPO9f/giphy.webp", gifAlt: "Face Pulls exercise" }
                    
                ]
            },
            levator_scapulae: {
                name: "Levator Scapulae",
                image: "https://www.kenhub.com/thumbor/xjX5BymSjRtS6AfDjh2S0bhGdyc=/fit-in/800x1600/filters:watermark(/images/logo_url.png,-10,-10,0):background_color(FFFFFF):format(jpeg)/images/library/13916/levator_scapulae.png", // Kenhub
                imageAlt: "Levator Scapulae muscle anatomy",
                audio: "https://dict.youdao.com/dictvoice?audio=levator%20scapulae&type=2", // Pronunciation audio
                translation: "提肩胛肌",
                memoryAid: "Lifts the shoulder blade.",
                origin: "Transverse processes of C1-C4.",
                insertion: "Superior part of medial border of scapula.",
                joint: "Scapula",
                movement: "Elevates scapula.",
                exercises: [
                    { name: "Shrugs", gif: "https://cdn.jefit.com/assets/img/exercises/gifs/42.gif", gifAlt: "Shrug exercise GIF" },
                    { name: "Neck Side Stretch", gif: "https://www.24hourfitness.com/24life/fitness/2018/media_17f8f5318085a88353fde45c7d30bc02cedd672e0.gif?width=750&format=gif&optimize=medium", gifAlt: "Neck Side Stretch exercise" }
                ]
            },
            pectoralis_minor: {
                name: "Pectoralis Minor",
                image: "https://www.kenhub.com/thumbor/UW8kJzbHf-UnzKlG-cZRwMZ0bGA=/fit-in/413x413/filters:fill(FFFFFF,true):watermark(/images/watermark_only_413.png,0,0,0):watermark(/logos/logo_url_sm.png,-10,-10,0):format(jpeg)/images/learnable/musculus-pectoralis-minor/kGOP44qeKzr61ldhrqWVvQ_Musculus_pectoralis_minor_01.png", // Kenhub
                imageAlt: "Pectoralis Minor muscle anatomy",
                audio: "https://dict.youdao.com/dictvoice?audio=pectoralis%20minor&type=2", // Pronunciation audio
                translation: "胸小肌",
                memoryAid: "Small chest muscle under major.",
                origin: "Ribs 3-5.",
                insertion: "Coracoid process of scapula.",
                joint: "Scapula",
                movement: "Stabilizes and depresses scapula.",
                exercises: [
                    { name: "Push-ups", gif: "https://i.gifer.com/origin/53/5316230e06f72b22c318f49aee7d6051_w200.webp", gifAlt: "Push-up exercise GIF" },
                    { name: "Chest Dips", gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWoweG82ajQ1bHN0NHRneTk2bjRkbW9wemZndGZqamVybmJ2Nmd2YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Z0EHpiBVAMVguvqcia/giphy.webp", gifAlt: "Chest Dips exercise" }
                ]
            },
            serratus_anterior: {
                name: "Serratus Anterior",
                image: "https://www.kenhub.com/thumbor/VIME9YjBki8y1f-zzh0uziyJcvI=/fit-in/800x1600/filters:watermark(/images/logo_url.png,-10,-10,0):background_color(FFFFFF):format(jpeg)/images/library/13978/Serratus_anterior_muscle.png", // Kenhub
                imageAlt: "Serratus Anterior muscle anatomy",
                audio: "https://dict.youdao.com/dictvoice?audio=serratus%20anterior&type=2", // Pronunciation audio
                translation: "前锯肌",
                memoryAid: "Saw-toothed muscle on side of chest.",
                origin: "Ribs 1-8.",
                insertion: "Anterior surface of medial border of scapula.",
                joint: "Scapula",
                movement: "Protracts scapula.",
                exercises: [
                    { name: "Push-ups", gif: "https://i.gifer.com/origin/53/5316230e06f72b22c318f49aee7d6051_w200.webp", gifAlt: "Push-up exercise GIF" },

                    { name: "Wall Slides", gif: "https://www.bing.com/th/id/OGC.209530bd9471f00d7a8d2140326b2a18?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fwww.verywellhealth.com%2fthmb%2f66ayKEGlqUkmPyzVRsV7mHW0p0c%3d%2f800x533%2ffilters%3ano_upscale()%3amax_bytes(150000)%3astrip_icc()%2fVerywell-03-2696617-WallSlide01-SM-5979fb23d088c000106ea8d7.gif&ehk=ZtPn3%2f8PTPZjFl%2bn3TuP%2f%2bUox1UOE8chogfvYaRqPLk%3d", gifAlt: "Wall Slides exercise" }
                ]
            },
            triceps_brachii: {
                name: "Triceps Brachii",
                image: "https://www.kenhub.com/thumbor/HFbTJc2AayYsrOSJMmDE5axXPvs=/fit-in/800x1600/filters:watermark(/images/logo_url.png,-10,-10,0):background_color(FFFFFF):format(jpeg)/images/library/13946/aHliOOl62koJhumoZcUysg_vsBTp2iDc2_M._triceps_brachii_1.png",
                imageAlt: "Triceps Brachii muscle anatomy",
                audio: "https://dict.youdao.com/dictvoice?audio=triceps%20brachii&type=2", // Pronunciation audio
                translation: "肱三头肌",
                memoryAid: "Three-headed muscle at back of arm.",
                origin: "Infraglenoid tubercle of scapula, posterior humerus.",
                insertion: "Olecranon process of ulna.",
                joint: "Elbow",
                movement: "Extends forearm.",
                exercises: [
                    { name: "Triceps Pushdown", gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmpiMXVibDJ0eWhvbTY2c2M4OTVxaDNzaXE2ZG85ZGE3d3ltNHd5aiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/orZ35jCdlD8VkSb30U/200.gif", gifAlt: "Triceps Pushdown exercise" },
                    { name: "Dips", gif: "https://www.bing.com/th/id/OGC.5034d5ea4863110d81396198024c8a16?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0449%2f8453%2f3153%2ffiles%2fBench_Dips.gif%3fv%3d1722411995&ehk=7rycGA5lMBFpqMv1%2favSDitRJeVnymcGmMoLJ%2btO0ko%3d", gifAlt: "Dips exercise" },
                    { name: "Overhead Extension", gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmpobDB4b3EyaXo2MHk2NDAxaXJwaWJ6ejRscWxnaXMxcmJkenQxeSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/RiE2NjrlzabPWbEmfu/giphy.webp", gifAlt: "Overhead Extension exercise" }
                ]
            },
            brachialis: {
                name: "Brachialis",
                image: "https://www.kenhub.com/thumbor/irgobqaNJqm3NQavPHbUz8Fc95c=/fit-in/800x1600/filters:watermark(/images/logo_url.png,-10,-10,0):background_color(FFFFFF):format(jpeg)/images/library/13426/hnMiOBlYXgOsaWGpzNtA_g2q79enxYw_M._brachialis_2.png", // Kenhub
                imageAlt: "Brachialis muscle anatomy",
                audio: "https://dict.youdao.com/dictvoice?audio=brachialis&type=2", // Pronunciation audio
                translation: "肱肌",
                memoryAid: "Main elbow flexor under biceps.",
                origin: "Distal half of anterior humerus.",
                insertion: "Coronoid process and tuberosity of ulna.",
                joint: "Elbow",
                movement: "Flexes forearm.",
                exercises: [
                    { name: "Hammer Curl", gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTJncXJxa281cGk4dnAxOXhmNnc5ZWc5OTJhZ3ljZGljNzhwNTBuMSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/EWfDfF3QuN8qonE6Gu/giphy.webp", gifAlt: "Hammer Curl exercise" },
                    { name: "Reverse Curl", gif: "https://www.bing.com/th/id/OGC.f8491d9c239ab79d9eb425a230ae4e34?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fwww.verywellfit.com%2fthmb%2fn08CguCKLEOSFG6nefkYO1htvkg%3d%2f768x0%2ffilters%3ano_upscale()%3amax_bytes(150000)%3astrip_icc()%2f78--Dumbbell-reverse-curlGIF-8219516130814345a6f611bd988d6f37.gif&ehk=rO7Y1Xaf1dESMta9UEMQvhLP2DPyH%2fRjto59wRT5uCc%3d", gifAlt: "Reverse Curl exercise" }
                ]
            },
            biceps_brachii: {
                name: "Biceps Brachii",
                image: "https://www.kenhub.com/thumbor/0X8VRKFTJ5DT-6OaYklyFn42-xY=/fit-in/800x1600/filters:watermark(/images/logo_url.png,-10,-10,0):background_color(FFFFFF):format(jpeg)/images/library/14480/biceps_intro.png", // Kenhub
                imageAlt: "Biceps Brachii muscle anatomy",
                audio: "https://dict.youdao.com/dictvoice?audio=biceps%20brachii&type=2", // Pronunciation audio
                translation: "肱二头肌",
                memoryAid: "Classic 'biceps' – flexes elbow.",
                origin: "Supraglenoid tubercle and coracoid process of scapula.",
                insertion: "Radial tuberosity.",
                joint: "Elbow",
                movement: "Flexes and supinates forearm.",
                exercises: [
                    { name: "Bicep Curl", gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGNoMzlyc2JqbWFtYWFza3NmbGFpY3o1N3FvcDN5d21vZ2o0ZGZ2ZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Lh5tfasv0ReOFLcSTB/200.webp", gifAlt: "Bicep Curl exercise" },
                    { name: "Chin-ups", gif: "https://garmaonhealth.com/wp-content/uploads/2017/01/chinup.gif", gifAlt: "Chin-ups exercise" }
                ]
            },
            brachioradialis: {
                name: "Brachioradialis",
                image: "https://www.kenhub.com/thumbor/ivIZsvOe0zWA1fnrmG_9U9AA2C4=/fit-in/800x1600/filters:watermark(/images/logo_url.png,-10,-10,0):background_color(FFFFFF):format(jpeg)/images/library/13121/v4cjWb9YRtBJX2uCql7Sg_G2szyLxpqm_M._brachioradialis_1__1_.png", // Kenhub
                imageAlt: "Brachioradialis muscle anatomy",
                audio: "https://dict.youdao.com/dictvoice?audio=brachioradialis&type=2", // Pronunciation audio
                translation: "肱桡肌",
                memoryAid: "Forearm muscle for elbow flexion.",
                origin: "Lateral supracondylar ridge of humerus.",
                insertion: "Styloid process of radius.",
                joint: "Elbow",
                movement: "Flexes forearm.",
                exercises: [
                    { name: "Hammer Curl", gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTJncXJxa281cGk4dnAxOXhmNnc5ZWc5OTJhZ3ljZGljNzhwNTBuMSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/EWfDfF3QuN8qonE6Gu/giphy.webphttps://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTJncXJxa281cGk4dnAxOXhmNnc5ZWc5OTJhZ3ljZGljNzhwNTBuMSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/EWfDfF3QuN8qonE6Gu/giphy.webp", gifAlt: "Hammer Curl exercise" },
                    
                    { name: "Reverse Curl", gif: "https://www.bing.com/th/id/OGC.f8491d9c239ab79d9eb425a230ae4e34?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fwww.verywellfit.com%2fthmb%2fn08CguCKLEOSFG6nefkYO1htvkg%3d%2f768x0%2ffilters%3ano_upscale()%3amax_bytes(150000)%3astrip_icc()%2f78--Dumbbell-reverse-curlGIF-8219516130814345a6f611bd988d6f37.gif&ehk=rO7Y1Xaf1dESMta9UEMQvhLP2DPyH%2fRjto59wRT5uCc%3d", gifAlt: "Reverse Curl exercise" }
                    
                ]
            }
        };

        // Utility: Collapsible sections
        function setupCollapsibles() {
            document.querySelectorAll('.collapsible').forEach(btn => {
                btn.onclick = function() {
                    this.classList.toggle("active");
                    const content = this.nextElementSibling;
                    if (content.style.display === "block") {
                        content.style.display = "none";
                    } else {
                        content.style.display = "block";
                    }
                };
            });
        }

        // Utility: Tooltip for memory aid
        function setupMemoryAidTooltip() {
            document.querySelectorAll('.memory-aid').forEach(el => {
                el.onmouseenter = function() {
                    let tooltip = document.createElement('div');
                    tooltip.className = 'tooltip';
                    tooltip.style.position = 'absolute';
                    tooltip.style.background = '#fffde7';
                    tooltip.style.color = '#222';
                    tooltip.style.border = '1px solid #ffecb3';
                    tooltip.style.padding = '8px 12px';
                    tooltip.style.borderRadius = '6px';
                    tooltip.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                    tooltip.style.zIndex = '1000';
                    tooltip.innerText = 'Mnemonic or visual cue to help remember the muscle.';
                    document.body.appendChild(tooltip);
                    const rect = el.getBoundingClientRect();
                    tooltip.style.left = (rect.left + window.scrollX + 10) + 'px';
                    tooltip.style.top = (rect.top + window.scrollY + 30) + 'px';
                    el._tooltip = tooltip;
                };
                el.onmouseleave = function() {
                    if (el._tooltip) {
                        document.body.removeChild(el._tooltip);
                        el._tooltip = null;
                    }
                };
            });
        }

        // Load muscle details
        function loadMuscle(muscleKey) {
            const m = muscles[muscleKey];
            if (!m) return;
            document.getElementById('main-content').innerHTML = `
                <img src="${m.image}" alt="${m.imageAlt}" class="muscle-image" />
                <div class="section">
                    <div class="audio-pronunciation">
                        <label for="audio-${muscleKey}"><strong>Pronunciation:</strong></label><br>
                        <audio id="audio-${muscleKey}" controls>
                            <source src="${m.audio}" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                    
                    <div class="translation"><strong>Chinese:</strong> ${m.translation}</div>
                    <div class="memory-aid" tabindex="0" title="Click for mnemonic">${m.memoryAid}</div>
                </div>
                <div class="section">
                    <button class="collapsible">Origin</button>
                    <div class="content">${m.origin}</div>
                    <button class="collapsible">Insertion</button>
                    <div class="content">${m.insertion}</div>
                    <button class="collapsible">Joint</button>
                    <div class="content">${m.joint}</div>
                    <button class="collapsible">Movement</button>
                    <div class="content">${m.movement}</div>
                </div>
                <div class="section">
                    <h3>Related Exercises</h3>
                    <ul class="exercise-list">
                        ${m.exercises.map(ex => `<li>${ex.name}${ex.gif ? `<br><img src="${ex.gif}" alt="${ex.name} GIF" class="exercise-gif" />` : ""}</li>`).join('')}
                    </ul>
                </div>
            `;
            setupCollapsibles();
            setupMemoryAidTooltip();
        }

        // Sidebar click handler
        document.querySelectorAll('.muscle-list li').forEach(li => {
            li.onclick = function() {
                document.querySelectorAll('.muscle-list li').forEach(el => el.classList.remove('active'));
                this.classList.add('active');
                loadMuscle(this.dataset.muscle);
            };
        });

        // Accessibility: Keyboard navigation for sidebar
        document.querySelectorAll('.muscle-list li').forEach(li => {
            li.tabIndex = 0;
            li.onkeydown = function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    li.click();
                }
            };
        });
   