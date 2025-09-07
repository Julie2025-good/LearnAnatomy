// script.js
   
        // replace with actual data
        function getAudioUrl(muscleName) {
  return `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(muscleName.toLowerCase())}&type=2`;
}

// Replace all "audio" fields below "iliacus_hf" to use common name encoding
const muscles = {
  pectoralis_major: {
    name: "Pectoralis Major",
    image: "https://www.kenhub.com/thumbor/t1EM9eBqujY4WZThIFzO7sYcCJE=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-pectoralis-major/Wt6B7qUeKq5WqFGlzsQ_Musculus_pectoralis_major_01.png",
    imageAlt: "Pectoralis Major muscle anatomy",
    audio: getAudioUrl("Pectoralis Major"),
    translation: "胸大肌",
    memoryAid: "Covers the upper chest like a fan, helps you hug. To remember the name: 'Pectoralis' comes from Latin 'pectus' meaning chest; 'Major' means large, so it's the large chest muscle.",
    origin: "Medial half of clavicle, sternum, and costal cartilages of ribs 1-6.",
    insertion: "Crest of greater tubercle of humerus.",
    joint: "Shoulder",
    movement: "Flexes, adducts, and internally rotates the shoulder.",
    exercises: [
      {
        name: "Push-up",
        gif: "https://cdn.dribbble.com/userupload/29475742/file/original-2b9dfa29d2b5090a4452df9fde42d7b1.gif",
        gifAlt: "Push-up exercise"
      },
      {
        name: "Barbell Bench Press",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/04/barbell-bench-press.gif",
        gifAlt: "Barbell bench press exercise"
      }
    ]
  },
  deltoid: {
    name: "Deltoid",
    image: "https://www.kenhub.com/thumbor/LG9FIJjB3eVXrPOsBgGnmLCz3NM=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/deltoid-muscle/ZjXqXLfFvjRqzu4Ue14DA_degvezVumJ_M._deltoideus_2.png",
    imageAlt: "Deltoid muscle anatomy",
    audio: getAudioUrl("Deltoid"),
    translation: "三角肌",
    memoryAid: "Triangle-shaped muscle covering the shoulder. To remember the name: 'Deltoid' comes from the Greek letter delta (Δ), which is triangle-shaped, matching the muscle's shape.",
    origin: "Lateral third of clavicle, acromion, and spine of scapula.",
    insertion: "Deltoid tuberosity of humerus.",
    joint: "Shoulder",
    movement: "Abducts, flexes, and extends the shoulder.",
    exercises: [
      {
        name: "Dumbbell Lateral Raise",
        gif: "https://fitliferegime.com/wp-content/uploads/2023/04/Dumbbell-Lateral-Raise.gif",
        gifAlt: "Dumbbell lateral raise"
      },
      {
        name: "Shoulder Press",
        gif: "https://fitliferegime.com/wp-content/uploads/2023/08/Overhead-Press.gif",
        gifAlt: "Shoulder press"
      }
    ]
  },
  latissimus_dorsi: {
    name: "Latissimus Dorsi",
    image: "https://www.kenhub.com/thumbor/4dpNBW7SeaOvknnVZCTtJP6_vbE=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/latissimus-dorsi-muscle/fcsQfGUAmgIlDsCf9YjRg_Musculus_latissimus_dorsi_2.png",
    imageAlt: "Latissimus Dorsi muscle anatomy",
    audio: getAudioUrl("Latissimus Dorsi"),
    translation: "背阔肌",
    memoryAid: "Large back muscle, looks like wings. To remember the name: 'Latissimus' means 'broadest' and 'dorsi' means 'of the back' in Latin, so it's the broadest muscle of the back.",
    origin: "Spinous processes of T7-T12, thoracolumbar fascia, iliac crest, and lower 3-4 ribs.",
    insertion: "Intertubercular groove of humerus.",
    joint: "Shoulder",
    movement: "Extends, adducts, and internally rotates the shoulder.",
    exercises: [
      {
        name: "Pull-up",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/11/pull-up.gif",
        gifAlt: "Pull-up"
      },
      {
        name: "Lat Pulldown",
        gif: "https://sporium.net/wp-content/uploads/2020/01/pulldown-min.gif",
        gifAlt: "Lat pulldown"
      }
    ]
  },
  trapezius: {
    name: "Trapezius",
    image: "https://www.kenhub.com/thumbor/GkWk0wO65lRZi_NcbI5IMWUrQ3M=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-trapezius/7evICYBYfo38YuaOSbJbHA_Trapezius_muscle.jpg",
    imageAlt: "Trapezius muscle anatomy",
    audio: getAudioUrl("Trapezius"),
    translation: "斜方肌",
    memoryAid: "Diamond-shaped muscle covering upper back and neck. To remember the name: 'Trapezius' refers to its trapezoid (diamond) shape.",
    origin: "Occipital bone, nuchal ligament, spinous processes of C7-T12.",
    insertion: "Lateral third of clavicle, acromion, and spine of scapula.",
    joint: "Scapula",
    movement: "Elevates, retracts, depresses, and upwardly rotates the scapula.",
    exercises: [
      {
        name: "Barbell Shrug",
        gif: "https://menspower.nl/wp-content/uploads/2018/02/Barbell-shrug-back.gif",
        gifAlt: "Barbell shrug"
      },
      {
        name: "Face Pull",
        gif: "https://fitliferegime.com/wp-content/uploads/2023/06/Face-Pull.gif",
        gifAlt: "Face pull"
      }
    ]
  },
  rhomboid: {
    name: "Rhomboid",
    image: "https://www.kenhub.com/thumbor/YyIewYwtPWRCVYv2Hpcw1kOvbIs=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-rhomboideus-major/AfbeHMvYMNnRLp9DgOAJpw_Rhomboid_major.png",
    imageAlt: "Rhomboids muscle anatomy",
    audio: getAudioUrl("Rhomboid"),
    translation: "菱形肌",
    memoryAid: "Connects spine to scapula, helps pinch shoulder blades together. To remember the name: 'Rhomboid' are named for their rhombus (diamond) shape.",
    origin: "Spinous processes of C7-T5.",
    insertion: "Medial border of scapula.",
    joint: "Scapula",
    movement: "Retracts and downwardly rotates the scapula.",
    exercises: [
      {
        name: "Reverse Fly",
        gif: "https://www.hipertrofia.org/blog/wp-content/uploads/2023/11/dumbbell-reverse-fly.gif",
        gifAlt: "Reverse fly"
      },
      {
        name: "Seated Row",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/08/cable-seated-row.gif",
        gifAlt: "Seated row"
      }
    ]
  },
  levator_scapulae: {
    name: "Levator Scapulae",
    image: "https://www.kenhub.com/thumbor/j0IZegmHB9Hca80R2px3z71AXWM=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-levator-scapulae/ZeUYiETU7cBAla4RdSJxdg_Musculus_levator_scapulae_1.png",
    imageAlt: "Levator Scapulae muscle anatomy",
    audio: getAudioUrl("Levator Scapulae"),
    translation: "提肩胛肌",
    memoryAid: "Lifts the shoulder blade. To remember the name: 'Levator' means lifter, and 'scapulae' refers to the shoulder blade.",
    origin: "Transverse processes of C1-C4.",
    insertion: "Superior part of medial border of scapula.",
    joint: "Scapula",
    movement: "Elevates the scapula.",
    exercises: [
      {
        name: "Dumbbell Shrug",
        gif: "https://cdn.shopify.com/s/files/1/0547/0486/5477/files/dumbbell-shrug_480x480.gif?v=1701426774",
        gifAlt: "Dumbbell shrug"
      },
      {
        name: "Neck Stretch",
        gif: "https://liftmanual.com/wp-content/uploads/2023/04/rotating-neck-stretch.gif",
        gifAlt: "Neck stretch"
      }
    ]
  },
  pectoralis_minor: {
    name: "Pectoralis Minor",
    image: "https://www.kenhub.com/thumbor/pXmWMV3AIFAnkYWsZIt-A4vTi_M=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-pectoralis-minor/kGOP44qeKzr61ldhrqWVvQ_Musculus_pectoralis_minor_01.png",
    imageAlt: "Pectoralis Minor muscle anatomy",
    audio: getAudioUrl("Pectoralis Minor"),
    translation: "胸小肌",
    memoryAid: "Small chest muscle under pectoralis major. To remember the name: 'Minor' means smaller, so it's the smaller chest muscle under the major.",
    origin: "Ribs 3-5.",
    insertion: "Coracoid process of scapula.",
    joint: "Scapula",
    movement: "Protracts and depresses the scapula.",
    exercises: [
      {
        name: "Push-up Plus",
        gif: "https://fitliferegime.com/wp-content/uploads/2023/09/Decline-Push-Up.gif",
        gifAlt: "Push-up plus"
      },
      {
        name: "Chest Dip",
        gif: "https://fitliferegime.com/wp-content/uploads/2023/09/Chest-Dip-Machine.gif",
        gifAlt: "Chest dip"
      }
    ]
  },
  serratus_anterior: {
    name: "Serratus Anterior",
    image: "https://www.kenhub.com/thumbor/6zDKU1leNLQQZsO6kLn0Lp4E_VY=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-serratus-anterior/A3RTzVw0xDev8jFORnwDLQ_Musculus_serratus_anterior_01.png",
    imageAlt: "Serratus Anterior muscle anatomy",
    audio: getAudioUrl("Serratus Anterior"),
    translation: "前锯肌",
    memoryAid: "Saw-toothed muscle on side of chest. To remember the name: 'Serratus' means saw-like, referring to its jagged edge.",
    origin: "Upper 8 or 9 ribs.",
    insertion: "Medial border of scapula.",
    joint: "Scapula",
    movement: "Protracts and upwardly rotates the scapula.",
    exercises: [
      {
        name: "Push-up Plus",
        gif: "https://fitliferegime.com/wp-content/uploads/2023/09/Decline-Push-Up.gif",
        gifAlt: "Push-up plus"
      },
      {
        name: "Wall Slide",
        gif: "https://www.verywellhealth.com/thmb/66ayKEGlqUkmPyzVRsV7mHW0p0c=/800x533/filters:no_upscale():max_bytes(150000):strip_icc()/Verywell-03-2696617-WallSlide01-SM-5979fb23d088c000106ea8d7.gif",
        gifAlt: "Wall slide"
      }
    ]
  },
  triceps_brachii: {
    name: "Triceps Brachii",
    image: "https://www.kenhub.com/thumbor/dYzPca07WiK_-LJaI1v4FRDyCcw=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-triceps-brachii/yek8v3oLhs3PvFEQS1K8ZQ_YLST1Wrqj7_M._triceps_brachii_1.png",
    imageAlt: "Triceps Brachii muscle anatomy",
    audio: getAudioUrl("Triceps Brachii"),
    translation: "肱三头肌",
    memoryAid: "Three-headed muscle on the back of upper arm. To remember the name: 'Triceps' means three heads, 'brachii' means of the arm.",
    origin: "Infraglenoid tubercle of scapula, posterior humerus.",
    insertion: "Olecranon process of ulna.",
    joint: "Elbow",
    movement: "Extends the elbow.",
    exercises: [
      {
        name: "Triceps Pushdown",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2023/03/ez-bar-tricep-pushdown.gif",
        gifAlt: "Triceps pushdown"
      },
      {
        name: "Overhead Triceps Extension",
        gif: "https://fitliferegime.com/wp-content/uploads/2023/02/Dumbbell-Triceps-Extension.gif",
        gifAlt: "Overhead triceps extension"
      }
    ]
  },
  brachialis: {
    name: "Brachialis",
    image: "https://www.kenhub.com/thumbor/cd_ODv5Qm8UVjT5_T-Wpa1BzIZE=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/brachialis-muscle/hnMiOBlYXgOsaWGpzNtA_g2q79enxYw_M._brachialis_2.png",
    imageAlt: "Brachialis muscle anatomy",
    audio: getAudioUrl("Brachialis"),
    translation: "肱肌",
    memoryAid: "Lies under biceps, strong elbow flexor. To remember the name: 'Brachialis' means 'of the arm' in Latin, and it's deep to the biceps.",
    origin: "Distal half of anterior humerus.",
    insertion: "Coronoid process and tuberosity of ulna.",
    joint: "Elbow",
    movement: "Flexes the elbow.",
    exercises: [
      {
        name: "Hammer Curl",
        gif: "https://fitliferegime.com/wp-content/uploads/2023/12/Hammer-Curl.gif",
        gifAlt: "Hammer curl"
      },
      {
        name: "Reverse Curl",
        gif: "https://fitliferegime.com/wp-content/uploads/2023/12/Dumbbell-Reverse-Curl.gif",
        gifAlt: "Reverse curl"
      }
    ]
  },
  biceps_brachii: {
    name: "Biceps Brachii",
    image: "https://www.kenhub.com/thumbor/5HI-kbzD3SoqsfxswdsE3D9imvk=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/biceps-brachii-muscle/rN9l7nQFmmNKogLS9UqALw_biceps-brachii-muscle.png",
    imageAlt: "Biceps Brachii muscle anatomy",
    audio: getAudioUrl("Biceps Brachii"),
    translation: "肱二头肌",
    memoryAid: "Two-headed muscle on the front of upper arm. To remember the name: 'Biceps' means two heads, 'brachii' means of the arm.",
    origin: "Supraglenoid tubercle and coracoid process of scapula.",
    insertion: "Radial tuberosity and bicipital aponeurosis.",
    joint: "Elbow",
    movement: "Flexes and supinates the forearm.",
    exercises: [
      {
        name: "Biceps Curl",
        gif: "http://newlife.com.cy/wp-content/uploads/2019/11/23211301-Dumbbell-Standing-Inner-Biceps-Curl-version-2_Upper-Arms_360.gif",
        gifAlt: "Biceps curl"
      },
      {
        name: "Chin-up",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2023/04/band-assisted-chin-up.gif",
        gifAlt: "Chin-up"
      }
    ]
  },
  iliacus_hf: {
    name: "Iliacus (HF)",
    image: "https://www.kenhub.com/thumbor/4Puc0t6hbO3ILNKJ7K-pZ48zICY=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/iliacus-muscle/dW1EcvVAus0L6jAP5uQA_WATke5hmbH_M._iliacus_FKT_2.png",
    imageAlt: "Iliacus (HF) muscle anatomy",
    audio: getAudioUrl("Iliacus"),
    translation: "髂肌（髋屈肌）",
    memoryAid: "Fan-shaped muscle in the pelvis, helps lift the thigh. To remember the name: 'Iliacus' comes from 'ilium', the pelvic bone where it originates.",
    origin: "Iliac fossa of the ilium.",
    insertion: "Lesser trochanter of femur via iliopsoas tendon.",
    joint: "Hip",
    movement: "Flexes the hip.",
    exercises: [
      {
        name: "Standing Hip Flexion",
        gif: "https://www.sparkpeople.com/assets/exercises/Balancing-Hip-Flexion.gif",
        gifAlt: "Standing hip flexion exercise"
      },
      {
        name: "Lunge",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2023/08/power-lunge-movement.gif",
        gifAlt: "Lunge exercise"
      }
    ]
  },
  psoas_major_hf: {
    name: "Psoas Major (HF)",
    image: "https://www.kenhub.com/thumbor/o47ZGD3pLWzp92M06Nip7O8OBj0=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-psoas-major/JHaHmE5bVoQAlwLpHZClw_NKNQDyzYw1_M._psoas_major_NN_1.png",
    imageAlt: "Psoas Major (HF) muscle anatomy",
    audio: getAudioUrl("Psoas Major"),
    translation: "腰大肌（髋屈肌）",
    memoryAid: "Long muscle running from spine to femur, key hip flexor. To remember the name: 'Psoas' is Greek for 'loin', referring to its location in the lower back.",
    origin: "Transverse processes, bodies, and intervertebral discs of T12-L5.",
    insertion: "Lesser trochanter of femur via iliopsoas tendon.",
    joint: "Hip",
    movement: "Flexes the hip.",
    exercises: [
      {
        name: "Lying Leg Raise",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/06/lying-leg-raise.gif",
        gifAlt: "Lying leg raise exercise"
      },
      {
        name: "Mountain Climber",
        gif: "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/08/mountainclimber-1472061303.gif?resize=1200:*",
        gifAlt: "Mountain climber exercise"
      }
    ]
  },
  sartorius_ba_hf: {
    name: "Sartorius (BA) (HF)",
    image: "https://www.kenhub.com/thumbor/9J00AI7SVMjNdmAIMTbiIEwMoKM=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-sartorius/zSZRanO4Fk2g9VbVOufCg_sartorius.png",
    imageAlt: "Sartorius (BA) (HF) muscle anatomy",
    audio: getAudioUrl("Sartorius"),
    translation: "缝匠肌（髋屈肌）",
    memoryAid: "Longest muscle in the body, runs diagonally across thigh. To remember the name: 'Sartorius' comes from Latin for tailor, as tailors used to sit cross-legged, a movement this muscle helps with.",
    origin: "Anterior superior iliac spine (ASIS).",
    insertion: "Medial surface of proximal tibia (pes anserinus).",
    joint: "Hip, Knee",
    movement: "Flexes, abducts, and laterally rotates the hip; flexes the knee.",
    exercises: [
      {
        name: "Standing Hip Flexion with External Rotation",
        gif: "https://images.squarespace-cdn.com/content/v1/5ea57caad08f387b2e9827bd/e20f55a2-d15f-4608-bacb-c6a9db38da86/Pendulum+leg+swings+for+hip+rotation.gif",
        gifAlt: "Standing hip flexion with external rotation exercise"
      },
      {
        name: "Seated Butterfly Stretch",
        gif: "https://post.healthline.com/wp-content/uploads/2023/07/Butterfly-stretch.gif",
        gifAlt: "Seated butterfly stretch exercise"
      }
    ]
  },

  gluteus_maximus_he: {
    name: "Gluteus Maximus (HE)",
    image: "https://www.kenhub.com/thumbor/H711ZZSPD7gW_NJkU1nz7IBzMWA=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-gluteus-maximus/UMpPDGJINr1wukpLidakYg_w7ss9tWRW1_M._gluteus_max._NN_1.png",
    imageAlt: "Gluteus Maximus (HE) muscle anatomy",
    audio: getAudioUrl("Gluteus Maximus"),
    translation: "臀大肌（髋伸肌）",
    memoryAid: "Largest buttock muscle, gives shape and power for hip extension. To remember the name: 'Gluteus' means buttock, 'maximus' means largest.",
    origin: "Ilium, sacrum, coccyx, and sacrotuberous ligament.",
    insertion: "Gluteal tuberosity of femur and iliotibial tract.",
    joint: "Hip",
    movement: "Extends and laterally rotates the hip.",
    exercises: [
      {
        name: "Squat",
        gif: "https://www.verywellfit.com/thmb/-i6U4nnLmsBUIqs8SvuUyhEkMeM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/79--Sumo-SquatGIF-df6fd051e5c1451f93e6e5fa5b6b420f.gif",
        gifAlt: "Squat exercise"
      }
    ]
  },
  vastus_medialis_q2: {
    name: "Vastus Medialis (Q2)",
    image: "https://www.kenhub.com/thumbor/s-IMu2ZwOsacaTq4-o-uLNemfqY=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-vastus-medialis/QK1NmzKHNDUyL0GDEIoyg_vastus_medialis.png",
    imageAlt: "Vastus Medialis (Q2) muscle anatomy",
    audio: getAudioUrl("Vastus Medialis"),
    translation: "股内侧肌（Q2）",
    memoryAid: "Teardrop-shaped muscle on inner thigh, stabilizes kneecap. To remember the name: 'Vastus' means vast or large, 'medialis' means toward the middle.",
    origin: "Medial lip of linea aspera of femur.",
    insertion: "Patella via quadriceps tendon and tibial tuberosity via patellar ligament.",
    joint: "Knee",
    movement: "Extends the knee.",
    exercises: [
      {
        name: "Squat",
        gif: "https://www.verywellfit.com/thmb/-i6U4nnLmsBUIqs8SvuUyhEkMeM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/79--Sumo-SquatGIF-df6fd051e5c1451f93e6e5fa5b6b420f.gif",
        gifAlt: "Squat exercise"
      },
      {
        name: "Leg Extension",
        gif: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/fitgif9-29-tnoverride-1515519049.gif",
        gifAlt: "Leg extension exercise"
      }
    ]
  },
  vastus_lateralis_q3: {
    name: "Vastus Lateralis (Q3)",
    image: "https://www.kenhub.com/thumbor/WABcBI3oNiRPEULMYOgRcsIzZ8I=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-vastus-lateralis/LYYU8fmPVNdFEKkpdcrtw_vastus_lateralis.png",
    imageAlt: "Vastus Lateralis (Q3) muscle anatomy",
    audio: getAudioUrl("Vastus Lateralis"),
    translation: "股外侧肌（Q3）",
    memoryAid: "Largest quadriceps muscle, on the outer thigh. To remember the name: 'Vastus' means large, 'lateralis' means on the side.",
    origin: "Greater trochanter and lateral lip of linea aspera of femur.",
    insertion: "Patella via quadriceps tendon and tibial tuberosity via patellar ligament.",
    joint: "Knee",
    movement: "Extends the knee.",
    exercises: [
      {
        name: "Squat",
        gif: "https://www.verywellfit.com/thmb/-i6U4nnLmsBUIqs8SvuUyhEkMeM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/79--Sumo-SquatGIF-df6fd051e5c1451f93e6e5fa5b6b420f.gif",
        gifAlt: "Squat exercise"
      },
      {
        name: "Leg Extension",
        gif: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/fitgif9-29-tnoverride-1515519049.gif",
        gifAlt: "Leg extension exercise"
      }
    ]
  },
  vastus_intermedius_q4: {
    name: "Vastus Intermedius (Q4)",
    image: "https://www.kenhub.com/thumbor/U27RNMaZysxX_j6QcJRvS3xtL6Y=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-vastus-intermedius/zukkr2ZDYhpLrYBm1BAAQ_vastus_intermedius.png",
    imageAlt: "Vastus Intermedius (Q4) muscle anatomy",
    audio: getAudioUrl("Vastus Intermedius"),
    translation: "股中间肌（Q4）",
    memoryAid: "Deep quadriceps muscle, lies beneath rectus femoris. To remember the name: 'Intermedius' means in between, as it lies between the other quadriceps muscles.",
    origin: "Anterior and lateral surfaces of shaft of femur.",
    insertion: "Patella via quadriceps tendon and tibial tuberosity via patellar ligament.",
    joint: "Knee",
    movement: "Extends the knee.",
    exercises: [
      {
        name: "Leg Extension",
        gif: "hhttps://archive.org/download/leg-extension/LEG%20EXTENSION.gif",
        gifAlt: "Leg extension exercise"
      },
      {
        name: "Squat",
        gif: "https://www.verywellfit.com/thmb/-i6U4nnLmsBUIqs8SvuUyhEkMeM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/79--Sumo-SquatGIF-df6fd051e5c1451f93e6e5fa5b6b420f.gif",
        gifAlt: "Squat exercise"
      }
    ]
  },
  hamstrings: {
    name: "Hamstrings",
    image: "https://my.clevelandclinic.org/-/scassets/images/org/health/articles/hamstring-muscles",
    imageAlt: "Hamstrings muscle anatomy",
    audio: getAudioUrl("Hamstrings"),
    translation: "腘绳肌",
    memoryAid: "Back thigh muscles, bend the knee and extend the hip. To remember the name: 'Hamstrings' refers to the tendons at the back of the knee, originally used to string up hams.",
    origin: "Ischial tuberosity (for semitendinosus, semimembranosus, and long head of biceps femoris); short head of biceps femoris: linea aspera.",
    insertion: "Medial surface of tibia (semitendinosus), medial condyle of tibia (semimembranosus), head of fibula (biceps femoris).",
    joint: "Hip, Knee",
    movement: "Extends the hip and flexes the knee.",
    exercises: [
      {
        name: "Romanian Deadlift",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/06/barbell-romanian-deadlift-movement.gif",
        gifAlt: "Romanian deadlift exercise"
      },
      {
        name: "Lying Leg Curl",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/04/lying-leg-curl.gif",
        gifAlt: "Lying leg curl exercise"
      }
    ]
  },
  biceps_femoris_h1: {
    name: "Biceps Femoris (H1)",
    image: "https://www.kenhub.com/thumbor/yPOzlngl0tz4Q3uxiAxnHgOCMZQ=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/biceps-femoris-muscle/FIfSEOLNNQVr7sTFquQWDg_18d9ZCZMxy_M._biceps_femoris_NN_2.png",
    imageAlt: "Biceps Femoris (H1) muscle anatomy",
    audio: getAudioUrl("Biceps Femoris"),
    translation: "股二头肌（H1）",
    memoryAid: "Lateral hamstring muscle, has two heads. To remember the name: 'Biceps' means two heads, 'femoris' means of the femur (thigh bone).",
    origin: "Long head: ischial tuberosity; Short head: linea aspera of femur.",
    insertion: "Head of fibula.",
    joint: "Hip, Knee",
    movement: "Extends the hip and flexes the knee.",
    exercises: [
      {
        name: "Lying Leg Curl",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/04/lying-leg-curl.gif",
        gifAlt: "Lying leg curl exercise"
      },
      {
        name: "Romanian Deadlift",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/06/barbell-romanian-deadlift-movement.gif",
        gifAlt: "Romanian deadlift exercise"
      }
    ]
  },
  semitendinosus_h2: {
    name: "Semitendinosus (H2)",
    image: "https://www.kenhub.com/thumbor/qEPBjzZqZGLBZ28pC4mj5IssSHw=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-semitendinosus/fxU2CIvPHqFpyhVSPSLh2w_semitendinosus.png",
    imageAlt: "Semitendinosus (H2) muscle anatomy",
    audio: getAudioUrl("Semitendinosus"),
    translation: "半腱肌（H2）",
    memoryAid: "Medial hamstring muscle, has a long tendon. To remember the name: 'Semitendinosus' means half tendon, referring to its long tendon.",
    origin: "Ischial tuberosity.",
    insertion: "Medial surface of proximal tibia (pes anserinus).",
    joint: "Hip, Knee",
    movement: "Extends the hip and flexes the knee.",
    exercises: [
      {
        name: "Romanian Deadlift",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/06/barbell-romanian-deadlift-movement.gif",
        gifAlt: "Romanian deadlift exercise"
      },
      {
        name: "Lying Leg Curl",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/04/lying-leg-curl.gif",
        gifAlt: "Lying leg curl exercise"
      }
    ]
  },
  semimembranosus_h3: {
    name: "Semimembranosus (H3)",
    image: "https://www.kenhub.com/thumbor/LaGlCWAh19J2myhkfNsXKuC-NeQ=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-semimembranosus/Z9787lT3L9gCeNg6lLjaoQ_rUXLrd6UsJ_M._semimembranosus_NN_1.png",
    imageAlt: "Semimembranosus (H3) muscle anatomy",
    audio: getAudioUrl("Semimembranosus"),
    translation: "半膜肌（H3）",
    memoryAid: "Medial hamstring muscle, has a broad membrane. To remember the name: 'Semimembranosus' means half membrane, referring to its broad, flat tendon.",
    origin: "Ischial tuberosity.",
    insertion: "Posterior part of medial condyle of tibia.",
    joint: "Hip, Knee",
    movement: "Extends the hip and flexes the knee.",
    exercises: [
      {
        name: "Romanian Deadlift",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/06/barbell-romanian-deadlift-movement.gif",
        gifAlt: "Romanian deadlift exercise"
      },
      {
        name: "Lying Leg Curl",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/04/lying-leg-curl.gif",
        gifAlt: "Lying leg curl exercise"
      }
    ]
  },
  gastrocnemius_c1: {
    name: "Gastrocnemius (C1)",
    image: "https://www.kenhub.com/thumbor/Kp3m-Rg3DrAh-EH4ncILAuni8KU=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/gastrocnemius-muscle/UBNnWrJfEfzi1t893NoOyg_Pzr4hPK6pL_M._gastrocnemius_NN_2.png",
    imageAlt: "Gastrocnemius (C1) muscle anatomy",
    audio: getAudioUrl("Gastrocnemius"),
    translation: "腓肠肌（C1）",
    memoryAid: "Calf muscle, forms the bulge at the back of lower leg. To remember the name: 'Gastrocnemius' comes from Greek for 'stomach of the leg', describing its bulging shape.",
    origin: "Medial and lateral condyles of femur.",
    insertion: "Posterior surface of calcaneus via Achilles tendon.",
    joint: "Ankle, Knee",
    movement: "Plantarflexes the ankle and flexes the knee.",
    exercises: [
      {
        name: "Standing Calf Raise",
        gif: "https://media.post.rvohealth.io/wp-content/uploads/2019/01/Standing-calf-raise-closed-kinetic-chain-.gif",
        gifAlt: "Standing calf raise exercise"
      },
      {
        name: "Seated Calf Raise",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2023/03/seated-calf-raise-dumbbell.gif",
        gifAlt: "Seated calf raise exercise"
      }
    ]
  },
  soleus_c2: {
    name: "Soleus (C2)",
    image: "https://www.kenhub.com/thumbor/d-HgNG67sNAx2DHaOVnXXkb64t8=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-soleus/DdNWoeTXJjbD8nw4X4Am6g_UDHERM1wg2_M._soleus_NN_1.png",
    imageAlt: "Soleus (C2) muscle anatomy",
    audio: getAudioUrl("Soleus"),
    translation: "比目鱼肌（C2）",
    memoryAid: "Flat muscle under gastrocnemius, helps you stand on tiptoe. To remember the name: 'Soleus' comes from Latin for sandal, as it is shaped like a flat sole.",
    origin: "Posterior surface of tibia and fibula (soleal line of tibia, head of fibula).",
    insertion: "Posterior surface of calcaneus via Achilles tendon.",
    joint: "Ankle",
    movement: "Plantarflexes the ankle.",
    exercises: [
      {
        name: "Standing Calf Raise",
        gif: "https://media.post.rvohealth.io/wp-content/uploads/2019/01/Standing-calf-raise-closed-kinetic-chain-.gif",
        gifAlt: "Standing calf raise exercise"
      },
      {
        name: "Seated Calf Raise",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2023/03/seated-calf-raise-dumbbell.gif",
        gifAlt: "Seated calf raise exercise"
      }
    ]
  },
  tibialis_anterior: {
    name: "Tibialis Anterior",
    image: "https://www.kenhub.com/thumbor/HtxEfGnifudfp8omesQDs-Ej05o=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-tibialis-anterior/iCsRoSLIR6yyds3uQ4qpGA_qu4jCsPRqy_M._tibialis_anterior_NN_1.png",
    imageAlt: "Tibialis Anterior muscle anatomy",
    audio: getAudioUrl("Tibialis Anterior"),
    translation: "胫骨前肌",
    memoryAid: "Front shin muscle, lifts the foot upward. To remember the name: 'Tibialis' refers to the tibia bone, 'anterior' means front.",
    origin: "Lateral condyle and upper two-thirds of lateral surface of tibia.",
    insertion: "Medial cuneiform and base of first metatarsal.",
    joint: "Ankle",
    movement: "Dorsiflexes and inverts the foot.",
    exercises: [
      {
        name: "Toe Raise",
        gif: "https://i.pinimg.com/originals/47/fe/6e/47fe6ef8f2c4e4a00c15dcdda533ff6c.gif",
        gifAlt: "Toe raise exercise"
      },
      {
        name: "Heel Walk",
        gif: "https://www.fitnessrobust.com/wp-content/uploads/2021/07/Seniors-Walking-toe-to-heels.gif",
        gifAlt: "Heel walk exercise"
      }
    ]
  },
  rectus_abdominis: {
    name: "Rectus Abdominis",
    image: "https://www.kenhub.com/thumbor/q6If-yLhpO_UC67-6N7OPJbN_r0=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-rectus-abdominis/jt6lkyuTYizDZFWnsiHpng_Musculus_rectus_abdominis_01.png",
    imageAlt: "Rectus Abdominis muscle anatomy",
    audio: getAudioUrl("Rectus Abdominis"),
    translation: "腹直肌",
    memoryAid: "Six-pack muscle, flexes the spine. To remember the name: 'Rectus' means straight, 'abdominis' refers to the abdomen.",
    origin: "Pubic crest and pubic symphysis.",
    insertion: "Xiphoid process and costal cartilages of ribs 5-7.",
    joint: "Spine",
    movement: "Flexes the spine.",
    exercises: [
      {
        name: "Crunch",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/crunch.gif",
        gifAlt: "Crunch exercise"
      },
      {
        name: "Leg Raise",
        gif: "https://www.sparkpeople.com/assets/exercises/Lying-Straight-Leg-Raises.gif",
        gifAlt: "Leg raise exercise"
      }
    ]
  },
  transversus_abdominis: {
    name: "Transversus Abdominis",
    image: "https://www.kenhub.com/thumbor/7-OuTVyKtTXUGrbZ5UUwP8x582Y=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-transversus-abdominis/bLpxdDFgr3tY6bdeYFP5w_Musculus_transversus_abdominis_01.png",
    imageAlt: "Transversus Abdominis muscle anatomy",
    audio: getAudioUrl("Transversus Abdominis"),
    translation: "腹横肌",
    memoryAid: "Deepest abdominal muscle, wraps around like a corset. To remember the name: 'Transverse' means running across, 'abdominis' refers to the abdomen.",
    origin: "Iliac crest, inguinal ligament, thoracolumbar fascia, and costal cartilages of ribs 7-12.",
    insertion: "Linea alba, pubic crest, and pecten pubis via conjoint tendon.",
    joint: "Spine",
    movement: "Compresses abdominal contents.",
    exercises: [
      {
        name: "Plank",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/plank.gif",
        gifAlt: "Plank exercise"
      },
      {
        name: "Dead Bug",
        gif: "https://static.wixstatic.com/media/8fe1c2_b0fa6ea79a19447f9f76b9dbc845c33d~mv2.gif/v1/fill/w_1080,h_1080,al_c/8fe1c2_b0fa6ea79a19447f9f76b9dbc845c33d~mv2.gif",
        gifAlt: "Dead bug exercise"
      }
    ]
  },
  internal_oblique: {
    name: "Internal Oblique",
    image: "https://www.kenhub.com/thumbor/5doamg6KJUVzEzpH-jg4VzcSNeU=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/abdominal-internal-oblique-muscle/fEgn9BcTvy3juWnkrrJg_838_Bauchmuskeln_M._rectus_abdominis_M._obliquus_externus_abdominis_M._obliquus_internus_abdominis_FKT.png",
    imageAlt: "Internal Oblique muscle anatomy",
    audio: getAudioUrl("Internal Oblique"),
    translation: "腹内斜肌",
    memoryAid: "Middle abdominal muscle, runs diagonally upward. To remember the name: 'Oblique' means slanting, 'internal' means inside.",
    origin: "Iliac crest, inguinal ligament, and thoracolumbar fascia.",
    insertion: "Lower ribs (10-12), linea alba, pubic crest, and pecten pubis.",
    joint: "Spine",
    movement: "Flexes and rotates the spine; compresses abdominal contents.",
    exercises: [
      {
        name: "Russian Twist",
        gif: "https://fitnessvolt.com/wp-content/uploads/2023/09/kettlebell-russian-twist.gif",
        gifAlt: "Russian twist exercise"
      },
      {
        name: "Side Plank",
        gif: "https://hips.hearstapps.com/hmg-prod/images/03-side-plank-1550753443.gif",
        gifAlt: "Side plank exercise"
      }
    ]
  },
  external_oblique: {
    name: "External Oblique",
    image: "https://www.kenhub.com/thumbor/ZupNstvcjafd972Lo0PNW0zqqL4=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/abdominal-external-oblique-muscle/N40pPSfuwVYo0ljzJt463w_M._obliquus_externus_abdominis.png",
    imageAlt: "External Oblique muscle anatomy",
    audio: getAudioUrl("External Oblique"),
    translation: "腹外斜肌",
    memoryAid: "Superficial abdominal muscle, runs diagonally downward. To remember the name: 'Oblique' means slanting, 'external' means outside.",
    origin: "External surfaces of ribs 5-12.",
    insertion: "Linea alba, pubic tubercle, and iliac crest.",
    joint: "Spine",
    movement: "Flexes and rotates the spine; compresses abdominal contents.",
    exercises: [
      {
        name: "Bicycle Crunch",
        gif: "https://media.post.rvohealth.io/wp	content/uploads/2023/08/CheapMadeupLeafhopper-size_restricted.gif",
        gifAlt: "Bicycle crunch exercise"
      },
      {
        name: "Standing Oblique Crunch",
        gif: "https://online.flipbuilder.com/hdfq/ozca/files/pageConfig/blog_BeginnerAbs_StandingObliqueCrunches.gif?200704120548",
        gifAlt: "Standing oblique crunch exercise"
      }
    ]
  },
  erector_spinae: {
    name: "Erector Spinae",
    image: "https://www.kenhub.com/thumbor/lmc24eP3CnMnwwXTjG3EILNCiWQ=/fit-in/413x413/filters:fill(FFFFFF,true):watermark(/images/watermark_only_413.png,0,0,0):watermark(/logos/logo_url_sm.png,-10,-10,0):format(jpeg)/images/learnable/erector-spinae-muscle-1/gNmoym2pM92JSOmZOMU13w_Erector_spinae_muscle.png",
    imageAlt: "Erector Spinae muscle anatomy",
    audio: getAudioUrl("Erector Spinae"),
    translation: "竖脊肌群",
    memoryAid: "Long muscles along the spine, help you stand tall. To remember the name: 'Erector' means to straighten, 'spinae' refers to the spine.",
    origin: "Broad tendon from sacrum, iliac crest, lumbar and thoracic vertebrae.",
    insertion: "Ribs, transverse and spinous processes of vertebrae, mastoid process.",
    joint: "Spine",
    movement: "Extends and laterally flexes the spine.",
    exercises: [
      {
        name: "Back Extension",
        gif: "https://i0.wp.com/angrylionfitness.com/wp-content/uploads/2023/06/AngryLionFitness.com-weighted-hyperextension.gif?resize=1024%2C1024&ssl=1",
        gifAlt: "Back extension exercise"
      },
      {
        name: "Superman",
        gif: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/fitgif-friday-superman-slider-thumbnail-override-0-1492696801.gif",
        gifAlt: "Superman exercise"
      }
    ]
  },
  rotator_cuff_muscles_4: {
    name: "Rotator Cuff Muscles (4)",
    image: "",
    imageAlt: "Rotator Cuff Muscles (4) muscle anatomy",
    audio: getAudioUrl("Rotator Cuff Muscles"),
    translation: "肩袖肌群（4）",
    memoryAid: "Mnemonic missing. To remember the name: The rotator cuff is a group of four muscles that rotate and stabilize the shoulder joint.",
    origin: "Supraspinatus: supraspinous fossa; Infraspinatus: infraspinous fossa; Teres minor: lateral border of scapula; Subscapularis: subscapular fossa.",
    insertion: "Greater tubercle of humerus (supraspinatus, infraspinatus, teres minor); lesser tubercle of humerus (subscapularis).",
    joint: "Shoulder",
    movement: "Stabilizes the shoulder; rotates and abducts the arm.",
    exercises: [
      {
        name: "External Rotation with Band",
        gif: "https://sportydoctor.com/wp-content/uploads/Banded-Shoulder-External-Rotation.gif",
        gifAlt: "External rotation with band exercise"
      },
      {
        name: "Internal Rotation with Band",
        gif: "https://sportydoctor.com/wp-content/uploads/Banded-Shoulder-Internal-Rotation.gif",
        gifAlt: "Internal rotation with band exercise"
      }
    ]
  },
  supraspinatus_r1: {
    name: "Supraspinatus (R1)",
    image: "https://www.kenhub.com/thumbor/QDyoX1Vc_zQg_kdGjFtozmkAa0k=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-supraspinatus/8aopcPx9UI7nQdz1DnwhNw_6w5T7o4YpX_M._supraspinatus_1.png",
    imageAlt: "Supraspinatus (R1) muscle anatomy",
    audio: getAudioUrl("Supraspinatus"),
    translation: "冈上肌（R1）",
    memoryAid: "Starts abduction of the arm, like raising your hand to ask a question. To remember the name: 'Supraspinatus' means above the spine of the scapula.",
    origin: "Supraspinous fossa of scapula.",
    insertion: "Superior facet of greater tubercle of humerus.",
    joint: "Shoulder",
    movement: "Abducts the shoulder.",
    exercises: [
      {
        name: "Empty Can Raise",
        gif: "https://iris.hattiesburgclinic.com/patadv/exkit/Tubing%20Exercises/Images/0210000131sh25m.png",
        gifAlt: "Empty can raise exercise"
      },
      {
        name: "Lateral Raise",
        gif: "https://www.verywellfit.com/thmb/_xudt8-GlEWif3XwX6yLKwoRPAE=/900x0/filters:no_upscale():max_bytes(150000):strip_icc()/61-4588211-dumbell-Lateral-side-Raise-GIF-7858592bcda347a9adf46886c5106e73.gif",
        gifAlt: "Lateral raise exercise"
      }
    ]
  },
  infraspinatus_r2: {
    name: "Infraspinatus (R2)",
    image: "https://www.kenhub.com/thumbor/RuIPhyf3IWnKLn5-yt-s7rFdblg=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/infraspinatus-muscle/cxgYhuVirMcwxZuxEKnHjw_gFqESBPm2A_M._infraspinatus_2.png",
    imageAlt: "Infraspinatus (R2) muscle anatomy",
    audio: getAudioUrl("Infraspinatus"),
    translation: "冈下肌（R2）",
    memoryAid: "External rotator—think of winding up to throw a ball. To remember the name: 'Infraspinatus' means below the spine of the scapula.",
    origin: "Infraspinous fossa of scapula.",
    insertion: "Middle facet of greater tubercle of humerus.",
    joint: "Shoulder",
    movement: "Externally rotates the shoulder.",
    exercises: [
      {
        name: "Side-lying External Rotation",
        gif: "https://1.bp.blogspot.com/-A34E9v-DREw/YCMmVleaTbI/AAAAAAAAAys/OORpOlOspkgjnrKPBFKsjG9uCloQOjBDgCLcBGAsYHQ/s320/side-lying-shoulder-external-rotation-with-dumbbellside-lying-dumbbell-out-rotation.gif",
        gifAlt: "Side-lying external rotation exercise"
      },
      {
        name: "Band External Rotation",
        gif: "https://sportydoctor.com/wp-content/uploads/Banded-Shoulder-External-Rotation.gif",
        gifAlt: "Band external rotation exercise"
      }
    ]
  },
  teres_minor_r3: {
    name: "Teres Minor (R3)",
    image: "https://www.kenhub.com/thumbor/ktiPOTihLRl27s_RaubPuA8l_3g=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-teres-minor/iAJArxmaiB78yHylXkYg_FeDYRgt9Ko_M._teres_minor_1.png",
    imageAlt: "Teres Minor (R3) muscle anatomy",
    audio: getAudioUrl("Teres Minor"),
    translation: "小圆肌（R3）",
    memoryAid: "Small external rotator—think of fine-tuning shoulder rotation, like adjusting a knob. To remember the name: 'Teres' means rounded, 'minor' means smaller.",
    origin: "Lateral border of scapula.",
    insertion: "Inferior facet of greater tubercle of humerus.",
    joint: "Shoulder",
    movement: "Externally rotates the shoulder.",
    exercises: [
      {
        name: "Band External Rotation",
        gif: "https://sportydoctor.com/wp-content/uploads/Banded-Shoulder-External-Rotation.gif",
        gifAlt: "Band external rotation exercise"
      }
    ]
  },
  subscapularis_r4: {
    name: "Subscapularis (R4)",
    image: "https://www.kenhub.com/thumbor/SFPZaQoAfiprref0iYLn9sGkQGk=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-subscapularis/kdBvHlsFOtwi0WCRxM9Jw_Subscapularis_muscle.png",
    imageAlt: "Subscapularis (R4) muscle anatomy",
    audio: getAudioUrl("Subscapularis"),
    translation: "肩胛下肌（R4）",
    memoryAid: "Internal rotator—like closing a door with your arm. To remember the name: 'Subscapularis' means under the scapula.",
    origin: "Subscapular fossa of scapula.",
    insertion: "Lesser tubercle of humerus.",
    joint: "Shoulder",
    movement: "Internally rotates the shoulder.",
    exercises: [
      {
        name: "Internal Rotation with Band",
        gif: "https://sportydoctor.com/wp-content/uploads/Banded-Shoulder-Internal-Rotation.gif",
        gifAlt: "Internal rotation with band exercise"
      },
      {
        name: "Standing Internal Rotation",
        gif: "https://media.giphy.com/media/3o6Zt8zQwz7bT1QpAA/giphy.gif",
        gifAlt: "Standing internal rotation exercise"
      }
    ]
  },
  piriformis: {
    name: "Piriformis",
    image: "https://www.kenhub.com/thumbor/6U4h1-CAaGdMO1pT-DIbzjZ93hY=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-piriformis/0UnxBNPuUoohmlAovHgXQ_oBykvzVt4n_M._piriformis_NN_1.png",
    imageAlt: "Piriformis muscle anatomy",
    audio: getAudioUrl("Piriformis"),
    translation: "梨状肌",
    memoryAid: "Pear-shaped muscle, deep in the buttock, rotates the hip.",
    origin: "Anterior surface of sacrum.",
    insertion: "Superior border of greater trochanter of femur.",
    joint: "Hip",
    movement: "Laterally rotates and abducts the hip.",
    exercises: [
      {
        name: "Seated Piriformis Stretch",
        gif: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2024/03/400x400_What_are_the_Best_Exercises_for_Endometriosis_Seated_Piriformis_Stretch.gif",
        gifAlt: "Seated piriformis stretch exercise"
      },
      {
        name: "Figure 4 Stretch",
        gif: "https://media.giphy.com/media/3o6ZtpxSZbQRRnwCKQ/giphy.gif",
        gifAlt: "Figure 4 stretch exercise"
      }
    ]
  },
  brachioradialis: {
    name: "Brachioradialis",
    image: "https://www.kenhub.com/thumbor/9BJ-QJ-j3UytVteJWYOpE8qUhsg=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/brachioradialis-muscle/zWrLKRCYFMVdFBFt29aTEQ_TjYExfP4tz_M._brachioradialis_2.png",
    imageAlt: "Brachioradialis muscle anatomy",
    audio: getAudioUrl("Brachioradialis"),
    translation: "肱桡肌",
    memoryAid: "Forearm muscle, helps flex elbow.",
    origin: "Lateral supracondylar ridge of humerus.",
    insertion: "Styloid process of radius.",
    joint: "Elbow",
    movement: "Flexes the elbow.",
    exercises: [
      {
        name: "Hammer Curl",
        gif: "https://fitliferegime.com/wp-content/uploads/2023/12/Hammer-Curl.gif",
        gifAlt: "Hammer curl"
      },
      {
        name: "Reverse Curl",
        gif: "https://fitliferegime.com/wp-content/uploads/2023/12/Dumbbell-Reverse-Curl.gif",
        gifAlt: "Reverse curl"
      }
    ]
  },
  gluteus_medius_he: {
    name: "Gluteus Medius",
    image: "https://www.kenhub.com/thumbor/HcRztOLzDH4yMHct-mJ5kdlpqZk=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/gluteus-medius-muscle-2/dVGD75SFpFlpRbOM7CNZg_os6gu86kRw_M._gluteus_med._NN_2.png",
    imageAlt: "Gluteus Medius muscle anatomy",
    audio: getAudioUrl("Gluteus Medius"),
    translation: "臀中肌",
    memoryAid: "Side buttock muscle, stabilizes pelvis when walking.",
    origin: "External surface of ilium between anterior and posterior gluteal lines.",
    insertion: "Lateral surface of greater trochanter of femur.",
    joint: "Hip",
    movement: "Abducts and medially rotates the hip.",
    exercises: [
      {
        name: "Side-Lying Hip Abduction",
        gif: "https://www.verywellfit.com/thmb/T9ah6G2Eaiph6n0HZQV5UiUGW4o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/104--Hip-AbductionGIF-0f7b74d948f849d78864da9605a3eaa8.gif",
        gifAlt: "Side-lying hip abduction exercise"
      },
      {
        name: "Monster Walk",
        gif: "https://i.pinimg.com/originals/2d/0f/d8/2d0fd81e5703eea1dda03655cdc17253.gif",
        gifAlt: "Monster walk exercise"
      }
    ]
  },
  gluteus_minimus_he: {
    name: "Gluteus Minimus",
    image: "https://www.kenhub.com/thumbor/ubNr0_KyWc1wZ6fX_c7V5eNZ_NY=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-gluteus-minimus/bNGQBXwm9smbKz0gDbsCw_o7d1hkrGDD_M._gluteus_min._NN_1.png",
    imageAlt: "Gluteus Minimus muscle anatomy",
    audio: getAudioUrl("Gluteus Minimus"),
    translation: "臀小肌",
    memoryAid: "Smallest gluteal muscle, deep to gluteus medius.",
    origin: "External surface of ilium between anterior and inferior gluteal lines.",
    insertion: "Anterior surface of greater trochanter of femur.",
    joint: "Hip",
    movement: "Abducts and medially rotates the hip.",
    exercises: [
      {
        name: "Clamshell",
        gif: "https://www.spotebi.com/wp-content/uploads/2017/11/resistance-band-clamshell-exercise-illustration-spotebi.gif",
        gifAlt: "Clamshell exercise"
      },
      {
        name: "Side-Lying Leg Raise",
        gif: "https://fitliferegime.com/wp-content/uploads/2023/10/Band-Side-Lying-Leg-Lift.gif",
        gifAlt: "Side-lying leg raise exercise"
      }
    ]
  },
  tensor_fascia_latae_ba_abd: {
    name: "Tensor Fascia Latae",
    image: "https://www.kenhub.com/thumbor/J5NVJ0xZYUncfeLDmRy7t75xT_s=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-tensor-fasciae-latae/wPdBwbZr9EmSJxFBcMZKSw_CbhgeuzrP6_M._tensor_fasciae_latae_NN_1.png",
    imageAlt: "Tensor Fascia Latae muscle anatomy",
    audio: getAudioUrl("Tensor Fascia Latae"),
    translation: "阔筋膜张肌",
    memoryAid: "Small muscle on outer hip, tightens the iliotibial band.",
    origin: "Anterior iliac crest and anterior superior iliac spine (ASIS).",
    insertion: "Iliotibial tract (IT band), which attaches to lateral condyle of tibia.",
    joint: "Hip",
    movement: "Abducts, flexes, and medially rotates the hip.",
    exercises: [
      {
        name: "Standing Hip Abduction",
        gif: "https://leadingedgeny.com/wp-content/uploads/2021/11/Standing-hip-abduction.gif",
        gifAlt: "Standing hip abduction exercise"
      },
      {
        name: "Side Step with Band",
        gif: "https://media1.popsugar-assets.com/files/thumbor/LktT6RrmLCKSt2k-hfS9GoqgxOo/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2017/06/05/958/n/1922729/07704bab05a6bd8b_68c447d0878f9f3a_Side-Step.xxxlarge/i/Side-Steps-Booty-Band.gif",
        gifAlt: "Side step with band exercise"
      }
    ]
  },
  adductors: {
    name: "Adductors",
    image: "https://www.kenhub.com/thumbor/LVoyCXrkVRWSESflnfZBRZztL-0=/fit-in/800x1600/filters:watermark(/images/logo_url.png,-10,-10,0):background_color(FFFFFF):format(jpeg)/images/library/14012/Hip_adductors.png",
    imageAlt: "Adductors muscle anatomy",
    audio: getAudioUrl("Adductors"),
    translation: "收肌群",
    memoryAid: "Inner thigh muscles, pull legs together.",
    origin: "Pubis and ischium (varies by muscle: adductor longus, brevis, magnus, gracilis, pectineus).",
    insertion: "Linea aspera of femur (adductors), medial surface of tibia (gracilis), pectineal line (pectineus).",
    joint: "Hip",
    movement: "Adducts the hip.",
    exercises: [
      {
        name: "Standing Hip Adduction",
        gif: "https://www.sparkpeople.com/assets/exercises/Standing-Adduction.gif",
        gifAlt: "Standing hip adduction exercise"
      },
      {
        name: "Side-Lying Hip Adduction",
        gif: "https://www.spotebi.com/wp-content/uploads/2016/09/lying-side-hip-abduction-exercise-illustration-spotebi.gif",
        gifAlt: "Side-lying hip adduction exercise"
      }
    ]
  },
  quadriceps_4: {
    name: "Quadriceps",
    image: "https://www.kenhub.com/thumbor/08O0Lk96jBOozWw5dFgEB1G6MaM=/fit-in/800x1600/filters:watermark(/images/logo_url.png,-10,-10,0):background_color(FFFFFF):format(jpeg)/images/library/13926/Op0rOgXqQB5W7THiS8Q_NmqapCoy4Z_M._quadriceps_femoris_NN_2__1_.png",
    imageAlt: "Quadriceps muscle anatomy",
    audio: getAudioUrl("Quadriceps"),
    translation: "股四头肌",
    memoryAid: "Front thigh muscles, extend the knee.",
    origin: "Rectus femoris: AIIS; Vastus lateralis: greater trochanter and linea aspera; Vastus medialis: linea aspera; Vastus intermedius: anterior and lateral femur.",
    insertion: "Patella via quadriceps tendon and tibial tuberosity via patellar ligament.",
    joint: "Knee",
    movement: "Extends the knee.",
    exercises: [
      {
        name: "Squat",
        gif: "https://www.verywellfit.com/thmb/-i6U4nnLmsBUIqs8SvuUyhEkMeM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/79--Sumo-SquatGIF-df6fd051e5c1451f93e6e5fa5b6b420f.gif",
        gifAlt: "Squat exercise"
      },
      {
        name: "Leg Extension",
        gif: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/fitgif9-29-tnoverride-1515519049.gif",
        gifAlt: "Leg extension exercise"
      }
    ]
  },
  rectus_femoris: {
    name: "Rectus Femoris",
    image: "https://www.kenhub.com/thumbor/_UTw2MJJ6acgAPDsZHOO5ZcW-fY=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-rectus-femoris/u9CG8USFzTYEGjoOaFKyBA_rectus_femoris_muscle.png",
    imageAlt: "Rectus Femoris muscle anatomy",
    audio: getAudioUrl("Rectus Femoris"),
    translation: "股直肌",
    memoryAid: "Central quadriceps muscle, crosses both hip and knee. To remember the name: 'Rectus' means straight, 'femoris' refers to the femur (thigh bone).",
    origin: "Anterior inferior iliac spine (AIIS) and superior part of acetabulum.",
    insertion: "Patella via quadriceps tendon and tibial tuberosity via patellar ligament.",
    joint: "Hip, Knee",
    movement: "Flexes the hip and extends the knee.",
    exercises: [
      {
        name: "Leg Extension",
        gif: "https://archive.org/download/leg-extension/LEG%20EXTENSION.gif",
        gifAlt: "Leg extension exercise"
      },
      {
        name: "Squat",
        gif: "https://www.verywellfit.com/thmb/-i6U4nnLmsBUIqs8SvuUyhEkMeM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/79--Sumo-SquatGIF-df6fd051e5c1451f93e6e5fa5b6b420f.gif",
        gifAlt: "Squat exercise"
      }
    ]
  },
  sternocleidomastoid: {
    name: "Sternocleidomastoid",
   

    image: "https://www.kenhub.com/thumbor/6Ff78ISX5ghOWgMB2tO1KnJJCsQ=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-sternocleidomastoideus/suIZxIBsRiV22bQrV394bQ_Musculus_sternocleidomastoideus_01.png",
    imageAlt: "Sternocleidomastoid muscle anatomy",
    audio: getAudioUrl("Sternocleidomastoid"),
    translation: "胸锁乳突肌",
    memoryAid: "Neck muscle, turns and tilts the head. To remember the name: 'Sterno' refers to the sternum, 'cleido' to the clavicle, 'mastoid' to the mastoid process of the skull.",
    origin: "Manubrium of sternum and medial third of clavicle.",
    insertion: "Mastoid process of temporal bone and superior nuchal line of occipital bone.",
    joint: "Neck (cervical spine)",
    movement: "Flexes, rotates, and laterally bends the neck.",
    exercises: [
      {
        name: "Neck Isometrics",
        gif: "https://www.spotebi.com/wp-content/uploads/2016/09/neck-isometric-exercise-illustration-spotebi.gif",
        gifAlt: "Neck isometric exercise"
      },
      {
        name: "Neck Flexion Stretch",
        gif: "https://liftmanual.com/wp-content/uploads/2023/04/forward-flexion-neck-stretch.gif",
        gifAlt: "Neck flexion stretch exercise"
      }
    ]
  },
  multifidus: {
    name: "Multifidus",
    image: "https://www.kenhub.com/thumbor/5CPEbaW_1Yek4Ghfu3EzdBHbiqY=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculi-multifidi/iL2N4WECG2EoDJ9nY2yJKA_Multifidus-posterior.png",
    imageAlt: "Multifidus muscle anatomy",
    audio: getAudioUrl("Multifidus"),
    translation: "多裂肌",
    memoryAid: "Short deep back muscles, stabilize the spine. To remember the name: 'Multifidus' means many splits, referring to its segmented structure.",
    origin: "Sacrum, iliac crest, transverse processes of lumbar, thoracic, and cervical vertebrae.",
    insertion: "Spinous processes of vertebrae (2-4 segments above origin).",
    joint: "Spine",
    movement: "Stabilizes and extends the spine.",
    exercises: [
      {
        name: "Bird Dog",
        gif: "https://i.pinimg.com/originals/2f/0e/da/2f0eda75322c445e9f007d479ba5dcdf.gif",
        gifAlt: "Bird dog exercise"
      },
      {
        name: "Plank",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/plank.gif",
        gifAlt: "Plank exercise"
      }
    ]
  },
  quadratus_lumborum: {
    name: "Quadratus Lumborum",
    image: "https://www.kenhub.com/thumbor/WsKCeR34y9nrgDNWxh1XILv-Gb4=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-quadratus-lumborum/yISTLJl7lUrrzd9VJMdxwQ_Musculus_quadratus_lumborum_01.png",
    imageAlt: "Quadratus Lumborum muscle anatomy",
    audio: getAudioUrl("Quadratus Lumborum"),
    translation: "腰方肌",
    memoryAid: "Square-shaped muscle in lower back, helps bend sideways. To remember the name: 'Quadratus' means square, 'lumborum' refers to the lumbar region.",
    origin: "Iliac crest and iliolumbar ligament.",
    insertion: "12th rib and transverse processes of L1-L4.",
    joint: "Spine",
    movement: "Laterally flexes the spine and stabilizes the pelvis.",
    exercises: [
      {
        name: "Side Plank",
        gif: "https://hips.hearstapps.com/hmg-prod/images/03-side-plank-1550753443.gif",
        gifAlt: "Side plank exercise"
      },
      {
        name: "Standing Side Bend",
        gif: "https://i.pinimg.com/originals/e1/ef/fb/e1effb8f940f501fdafa195ca77f0c3e.gif",
        gifAlt: "Standing side bend exercise"
      }
    ]
  },
  diaphragm: {
    name: "Diaphragm",
    image: "https://www.kenhub.com/thumbor/9fovDTRu808xMnnPrIwQze9o8z4=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/diaphragm/THKpS5CWDWG6d0a3dNa8WQ_Diaphragma_02.png",
    imageAlt: "Diaphragm muscle anatomy",
    audio: getAudioUrl("Diaphragm"),
    translation: "膈肌",
    memoryAid: "Dome-shaped muscle for breathing, separates chest and abdomen. To remember the name: 'Diaphragm' comes from Greek for partition.",
    origin: "Xiphoid process, lower six ribs and costal cartilages, lumbar vertebrae.",
    insertion: "Central tendon of diaphragm.",
    joint: "Thoracic cavity (breathing muscle)",
    movement: "Increases thoracic cavity volume for inhalation.",
    exercises: [
      {
        name: "Diaphragmatic Breathing",
        gif: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/11/400x400_Breathing_Techniques_For_Stress_Relief_and_More_Diaphragmatic_Breathing.gif?w=1155&h=840",
        gifAlt: "Diaphragmatic breathing exercise"
      },
      {
        name: "Pursed Lip Breathing",
        gif: "https://post.healthline.com/wp-content/uploads/2022/06/400x400_13_Tips_for_Running_With_Asthma_Pursed_Lips_Breathing.gif",
        gifAlt: "Pursed lip breathing exercise"
      }
    ]
  },

  gluteus_maximus_he: {
    name: "Gluteus Maximus (HE)",
    image: "https://www.kenhub.com/thumbor/H711ZZSPD7gW_NJkU1nz7IBzMWA=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-gluteus-maximus/UMpPDGJINr1wukpLidakYg_w7ss9tWRW1_M._gluteus_max._NN_1.png",
    imageAlt: "Gluteus Maximus (HE) muscle anatomy",
    audio: getAudioUrl("Gluteus Maximus"),
    translation: "臀大肌（髋伸肌）",
    memoryAid: "Largest buttock muscle, gives shape and power for hip extension. To remember the name: 'Gluteus' means buttock, 'maximus' means largest.",
    origin: "Ilium, sacrum, coccyx, and sacrotuberous ligament.",
    insertion: "Gluteal tuberosity of femur and iliotibial tract.",
    joint: "Hip",
    movement: "Extends and laterally rotates the hip.",
    exercises: [
      {
        name: "Squat",
        gif: "https://www.verywellfit.com/thmb/-i6U4nnLmsBUIqs8SvuUyhEkMeM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/79--Sumo-SquatGIF-df6fd051e5c1451f93e6e5fa5b6b420f.gif",
        gifAlt: "Squat exercise"
      }
    ]
  },
  vastus_medialis_q2: {
    name: "Vastus Medialis (Q2)",
    image: "https://www.kenhub.com/thumbor/s-IMu2ZwOsacaTq4-o-uLNemfqY=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-vastus-medialis/QK1NmzKHNDUyL0GDEIoyg_vastus_medialis.png",
    imageAlt: "Vastus Medialis (Q2) muscle anatomy",
    audio: getAudioUrl("Vastus Medialis"),
    translation: "股内侧肌（Q2）",
    memoryAid: "Teardrop-shaped muscle on inner thigh, stabilizes kneecap. To remember the name: 'Vastus' means vast or large, 'medialis' means toward the middle.",
    origin: "Medial lip of linea aspera of femur.",
    insertion: "Patella via quadriceps tendon and tibial tuberosity via patellar ligament.",
    joint: "Knee",
    movement: "Extends the knee.",
    exercises: [
      {
        name: "Squat",
        gif: "https://www.verywellfit.com/thmb/-i6U4nnLmsBUIqs8SvuUyhEkMeM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/79--Sumo-SquatGIF-df6fd051e5c1451f93e6e5fa5b6b420f.gif",
        gifAlt: "Squat exercise"
      },
      {
        name: "Leg Extension",
        gif: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/fitgif9-29-tnoverride-1515519049.gif",
        gifAlt: "Leg extension exercise"
      }
    ]
  },
  vastus_lateralis_q3: {
    name: "Vastus Lateralis (Q3)",
    image: "https://www.kenhub.com/thumbor/WABcBI3oNiRPEULMYOgRcsIzZ8I=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-vastus-lateralis/LYYU8fmPVNdFEKkpdcrtw_vastus_lateralis.png",
    imageAlt: "Vastus Lateralis (Q3) muscle anatomy",
    audio: getAudioUrl("Vastus Lateralis"),
    translation: "股外侧肌（Q3）",
    memoryAid: "Largest quadriceps muscle, on the outer thigh. To remember the name: 'Vastus' means large, 'lateralis' means on the side.",
    origin: "Greater trochanter and lateral lip of linea aspera of femur.",
    insertion: "Patella via quadriceps tendon and tibial tuberosity via patellar ligament.",
    joint: "Knee",
    movement: "Extends the knee.",
    exercises: [
      {
        name: "Squat",
        gif: "https://www.verywellfit.com/thmb/-i6U4nnLmsBUIqs8SvuUyhEkMeM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/79--Sumo-SquatGIF-df6fd051e5c1451f93e6e5fa5b6b420f.gif",
        gifAlt: "Squat exercise"
      },
      {
        name: "Leg Extension",
        gif: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/fitgif9-29-tnoverride-1515519049.gif",
        gifAlt: "Leg extension exercise"
      }
    ]
  },
  vastus_intermedius_q4: {
    name: "Vastus Intermedius (Q4)",
    image: "https://www.kenhub.com/thumbor/U27RNMaZysxX_j6QcJRvS3xtL6Y=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-vastus-intermedius/zukkr2ZDYhpLrYBm1BAAQ_vastus_intermedius.png",
    imageAlt: "Vastus Intermedius (Q4) muscle anatomy",
    audio: getAudioUrl("Vastus Intermedius"),
    translation: "股中间肌（Q4）",
    memoryAid: "Deep quadriceps muscle, lies beneath rectus femoris. To remember the name: 'Intermedius' means in between, as it lies between the other quadriceps muscles.",
    origin: "Anterior and lateral surfaces of shaft of femur.",
    insertion: "Patella via quadriceps tendon and tibial tuberosity via patellar ligament.",
    joint: "Knee",
    movement: "Extends the knee.",
    exercises: [
      {
        name: "Leg Extension",
        gif: "https://archive.org/download/leg-extension/LEG%20EXTENSION.gif",
        gifAlt: "Leg extension exercise"
      },
      {
        name: "Squat",
        gif: "https://www.verywellfit.com/thmb/-i6U4nnLmsBUIqs8SvuUyhEkMeM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/79--Sumo-SquatGIF-df6fd051e5c1451f93e6e5fa5b6b420f.gif",
        gifAlt: "Squat exercise"
      }
    ]
  },
  hamstrings: {
    name: "Hamstrings",
    image: "https://my.clevelandclinic.org/-/scassets/images/org/health/articles/hamstring-muscles",
    imageAlt: "Hamstrings muscle anatomy",
    audio: getAudioUrl("Hamstrings"),
    translation: "腘绳肌",
    memoryAid: "Back thigh muscles, bend the knee and extend the hip. To remember the name: 'Hamstrings' refers to the tendons at the back of the knee, originally used to string up hams.",
    origin: "Ischial tuberosity (for semitendinosus, semimembranosus, and long head of biceps femoris); short head of biceps femoris: linea aspera.",
    insertion: "Medial surface of tibia (semitendinosus), medial condyle of tibia (semimembranosus), head of fibula (biceps femoris).",
    joint: "Hip, Knee",
    movement: "Extends the hip and flexes the knee.",
    exercises: [
      {
        name: "Romanian Deadlift",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/06/barbell-romanian-deadlift-movement.gif",
        gifAlt: "Romanian deadlift exercise"
      },
      {
        name: "Lying Leg Curl",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/04/lying-leg-curl.gif",
        gifAlt: "Lying leg curl exercise"
      }
    ]
  },
  biceps_femoris_h1: {
    name: "Biceps Femoris (H1)",
    image: "https://www.kenhub.com/thumbor/yPOzlngl0tz4Q3uxiAxnHgOCMZQ=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/biceps-femoris-muscle/FIfSEOLNNQVr7sTFquQWDg_18d9ZCZMxy_M._biceps_femoris_NN_2.png",
    imageAlt: "Biceps Femoris (H1) muscle anatomy",
    audio: getAudioUrl("Biceps Femoris"),
    translation: "股二头肌（H1）",
    memoryAid: "Lateral hamstring muscle, has two heads. To remember the name: 'Biceps' means two heads, 'femoris' means of the femur (thigh bone).",
    origin: "Long head: ischial tuberosity; Short head: linea aspera of femur.",
    insertion: "Head of fibula.",
    joint: "Hip, Knee",
    movement: "Extends the hip and flexes the knee.",
    exercises: [
      {
        name: "Lying Leg Curl",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/04/lying-leg-curl.gif",
        gifAlt: "Lying leg curl exercise"
      },
      {
        name: "Romanian Deadlift",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/06/barbell-romanian-deadlift-movement.gif",
        gifAlt: "Romanian deadlift exercise"
      }
    ]
  },
  semitendinosus_h2: {
    name: "Semitendinosus (H2)",
    image: "https://www.kenhub.com/thumbor/qEPBjzZqZGLBZ28pC4mj5IssSHw=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-semitendinosus/fxU2CIvPHqFpyhVSPSLh2w_semitendinosus.png",
    imageAlt: "Semitendinosus (H2) muscle anatomy",
    audio: getAudioUrl("Semitendinosus"),
    translation: "半腱肌（H2）",
    memoryAid: "Medial hamstring muscle, has a long tendon. To remember the name: 'Semitendinosus' means half tendon, referring to its long tendon.",
    origin: "Ischial tuberosity.",
    insertion: "Medial surface of proximal tibia (pes anserinus).",
    joint: "Hip, Knee",
    movement: "Extends the hip and flexes the knee.",
    exercises: [
      {
        name: "Romanian Deadlift",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/06/barbell-romanian-deadlift-movement.gif",
        gifAlt: "Romanian deadlift exercise"
      },
      {
        name: "Lying Leg Curl",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/04/lying-leg-curl.gif",
        gifAlt: "Lying leg curl exercise"
      }
    ]
  },
  semimembranosus_h3: {
    name: "Semimembranosus (H3)",
    image: "https://www.kenhub.com/thumbor/LaGlCWAh19J2myhkfNsXKuC-NeQ=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-semimembranosus/Z9787lT3L9gCeNg6lLjaoQ_rUXLrd6UsJ_M._semimembranosus_NN_1.png",
    imageAlt: "Semimembranosus (H3) muscle anatomy",
    audio: getAudioUrl("Semimembranosus"),
    translation: "半膜肌（H3）",
    memoryAid: "Medial hamstring muscle, has a broad membrane. To remember the name: 'Semimembranosus' means half membrane, referring to its broad, flat tendon.",
    origin: "Ischial tuberosity.",
    insertion: "Posterior part of medial condyle of tibia.",
    joint: "Hip, Knee",
    movement: "Extends the hip and flexes the knee.",
    exercises: [
      {
        name: "Romanian Deadlift",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/06/barbell-romanian-deadlift-movement.gif",
        gifAlt: "Romanian deadlift exercise"
      },
      {
        name: "Lying Leg Curl",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/04/lying-leg-curl.gif",
        gifAlt: "Lying leg curl exercise"
      }
    ]
  },
  gastrocnemius_c1: {
    name: "Gastrocnemius (C1)",
    image: "https://www.kenhub.com/thumbor/Kp3m-Rg3DrAh-EH4ncILAuni8KU=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/gastrocnemius-muscle/UBNnWrJfEfzi1t893NoOyg_Pzr4hPK6pL_M._gastrocnemius_NN_2.png",
    imageAlt: "Gastrocnemius (C1) muscle anatomy",
    audio: getAudioUrl("Gastrocnemius"),
    translation: "腓肠肌（C1）",
    memoryAid: "Calf muscle, forms the bulge at the back of lower leg. To remember the name: 'Gastrocnemius' comes from Greek for 'stomach of the leg', describing its bulging shape.",
    origin: "Medial and lateral condyles of femur.",
    insertion: "Posterior surface of calcaneus via Achilles tendon.",
    joint: "Ankle, Knee",
    movement: "Plantarflexes the ankle and flexes the knee.",
    exercises: [
      {
        name: "Standing Calf Raise",
        gif: "https://media.post.rvohealth.io/wp-content/uploads/2019/01/Standing-calf-raise-closed-kinetic-chain-.gif",
        gifAlt: "Standing calf raise exercise"
      },
      {
        name: "Seated Calf Raise",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2023/03/seated-calf-raise-dumbbell.gif",
        gifAlt: "Seated calf raise exercise"
      }
    ]
  },
  soleus_c2: {
    name: "Soleus (C2)",
    image: "https://www.kenhub.com/thumbor/d-HgNG67sNAx2DHaOVnXXkb64t8=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-soleus/DdNWoeTXJjbD8nw4X4Am6g_UDHERM1wg2_M._soleus_NN_1.png",
    imageAlt: "Soleus (C2) muscle anatomy",
    audio: getAudioUrl("Soleus"),
    translation: "比目鱼肌（C2）",
    memoryAid: "Flat muscle under gastrocnemius, helps you stand on tiptoe. To remember the name: 'Soleus' comes from Latin for sandal, as it is shaped like a flat sole.",
    origin: "Posterior surface of tibia and fibula (soleal line of tibia, head of fibula).",
    insertion: "Posterior surface of calcaneus via Achilles tendon.",
    joint: "Ankle",
    movement: "Plantarflexes the ankle.",
    exercises: [
      {
        name: "Standing Calf Raise",
        gif: "https://media.post.rvohealth.io/wp-content/uploads/2019/01/Standing-calf-raise-closed-kinetic-chain-.gif",
        gifAlt: "Standing calf raise exercise"
      },
      {
        name: "Seated Calf Raise",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2023/03/seated-calf-raise-dumbbell.gif",
        gifAlt: "Seated calf raise exercise"
      }
    ]
  },
  tibialis_anterior: {
    name: "Tibialis Anterior",
    image: "https://www.kenhub.com/thumbor/HtxEfGnifudfp8omesQDs-Ej05o=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-tibialis-anterior/iCsRoSLIR6yyds3uQ4qpGA_qu4jCsPRqy_M._tibialis_anterior_NN_1.png",
    imageAlt: "Tibialis Anterior muscle anatomy",
    audio: getAudioUrl("Tibialis Anterior"),
    translation: "胫骨前肌",
    memoryAid: "Front shin muscle, lifts the foot upward. To remember the name: 'Tibialis' refers to the tibia bone, 'anterior' means front.",
    origin: "Lateral condyle and upper two-thirds of lateral surface of tibia.",
    insertion: "Medial cuneiform and base of first metatarsal.",
    joint: "Ankle",
    movement: "Dorsiflexes and inverts the foot.",
    exercises: [
      {
        name: "Toe Raise",
        gif: "https://i.pinimg.com/originals/47/fe/6e/47fe6ef8f2c4e4a00c15dcdda533ff6c.gif",
        gifAlt: "Toe raise exercise"
      },
      {
        name: "Heel Walk",
        gif: "https://www.fitnessrobust.com/wp-content/uploads/2021/07/Seniors-Walking-toe-to-heels.gif",
        gifAlt: "Heel walk exercise"
      }
    ]
  },
  rectus_abdominis: {
    name: "Rectus Abdominis",
    image: "https://www.kenhub.com/thumbor/q6If-yLhpO_UC67-6N7OPJbN_r0=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-rectus-abdominis/jt6lkyuTYizDZFWnsiHpng_Musculus_rectus_abdominis_01.png",
    imageAlt: "Rectus Abdominis muscle anatomy",
    audio: getAudioUrl("Rectus Abdominis"),
    translation: "腹直肌",
    memoryAid: "Six-pack muscle, flexes the spine. To remember the name: 'Rectus' means straight, 'abdominis' refers to the abdomen.",
    origin: "Pubic crest and pubic symphysis.",
    insertion: "Xiphoid process and costal cartilages of ribs 5-7.",
    joint: "Spine",
    movement: "Flexes the spine.",
    exercises: [
      {
        name: "Crunch",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/crunch.gif",
        gifAlt: "Crunch exercise"
      },
      {
        name: "Leg Raise",
        gif: "https://www.sparkpeople.com/assets/exercises/Lying-Straight-Leg-Raises.gif",
        gifAlt: "Leg raise exercise"
      }
    ]
  },
  transverse_abdominis: {
    name: "Transverse Abdominis",
    image: "https://www.kenhub.com/thumbor/7-OuTVyKtTXUGrbZ5UUwP8x582Y=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-transversus-abdominis/bLpxdDFgr3tY6bdeYFP5w_Musculus_transversus_abdominis_01.png",
    imageAlt: "Transverse Abdominis muscle anatomy",
    audio: getAudioUrl("Transverse Abdominis"),
    translation: "腹横肌",
    memoryAid: "Deepest abdominal muscle, wraps around like a corset. To remember the name: 'Transverse' means running across, 'abdominis' refers to the abdomen.",
    origin: "Iliac crest, inguinal ligament, thoracolumbar fascia, and costal cartilages of ribs 7-12.",
    insertion: "Linea alba, pubic crest, and pecten pubis via conjoint tendon.",
    joint: "Spine",
    movement: "Compresses abdominal contents.",
    exercises: [
      {
        name: "Plank",
        gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/plank.gif",
        gifAlt: "Plank exercise"
      },
      {
        name: "Dead Bug",
        gif: "https://static.wixstatic.com/media/8fe1c2_b0fa6ea79a19447f9f76b9dbc845c33d~mv2.gif/v1/fill/w_1080,h_1080,al_c/8fe1c2_b0fa6ea79a19447f9f76b9dbc845c33d~mv2.gif",
        gifAlt: "Dead bug exercise"
      }
    ]
  },
  internal_oblique: {
    name: "Internal Oblique",
    image: "https://www.kenhub.com/thumbor/5doamg6KJUVzEzpH-jg4VzcSNeU=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/abdominal-internal-oblique-muscle/fEgn9BcTvy3juWnkrrJg_838_Bauchmuskeln_M._rectus_abdominis_M._obliquus_externus_abdominis_M._obliquus_internus_abdominis_FKT.png",
    imageAlt: "Internal Oblique muscle anatomy",
    audio: getAudioUrl("Internal Oblique"),
    translation: "腹内斜肌",
    memoryAid: "Middle abdominal muscle, runs diagonally upward. To remember the name: 'Oblique' means slanting, 'internal' means inside.",
    origin: "Iliac crest, inguinal ligament, and thoracolumbar fascia.",
    insertion: "Lower ribs (10-12), linea alba, pubic crest, and pecten pubis.",
    joint: "Spine",
    movement: "Flexes and rotates the spine; compresses abdominal contents.",
    exercises: [
      {
        name: "Russian Twist",
        gif: "https://fitnessvolt.com/wp-content/uploads/2023/09/kettlebell-russian-twist.gif",
        gifAlt: "Russian twist exercise"
      },
      {
        name: "Side Plank",
        gif: "https://hips.hearstapps.com/hmg-prod/images/03-side-plank-1550753443.gif",
        gifAlt: "Side plank exercise"
      }
    ]
  },
  external_oblique: {
    name: "External Oblique",
    image: "https://www.kenhub.com/thumbor/ZupNstvcjafd972Lo0PNW0zqqL4=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/abdominal-external-oblique-muscle/N40pPSfuwVYo0ljzJt463w_M._obliquus_externus_abdominis.png",
    imageAlt: "External Oblique muscle anatomy",
    audio: getAudioUrl("External Oblique"),
    translation: "腹外斜肌",
    memoryAid: "Superficial abdominal muscle, runs diagonally downward. To remember the name: 'Oblique' means slanting, 'external' means outside.",
    origin: "External surfaces of ribs 5-12.",
    insertion: "Linea alba, pubic tubercle, and iliac crest.",
    joint: "Spine",
    movement: "Flexes and rotates the spine; compresses abdominal contents.",
    exercises: [
      {
        name: "Bicycle Crunch",
        gif: "https://img.emedihealth.com/wp-content/uploads/2020/06/5-bicycle-crunch.gif",
        gifAlt: "Bicycle crunch exercise"
      },
      {
        name: "Standing Oblique Crunch",
        gif: "https://online.flipbuilder.com/hdfq/ozca/files/pageConfig/blog_BeginnerAbs_StandingObliqueCrunches.gif?200704120548",
        gifAlt: "Standing oblique crunch exercise"
      }
    ]
  },
  erector_spinae_group: {
    name: "Erector Spinae Group",
    image: "https://www.kenhub.com/thumbor/lmc24eP3CnMnwwXTjG3EILNCiWQ=/fit-in/413x413/filters:fill(FFFFFF,true):watermark(/images/watermark_only_413.png,0,0,0):watermark(/logos/logo_url_sm.png,-10,-10,0):format(jpeg)/images/learnable/erector-spinae-muscle-1/gNmoym2pM92JSOmZOMU13w_Erector_spinae_muscle.png",
    imageAlt: "Erector Spinae Group muscle anatomy",
    audio: getAudioUrl("Erector Spinae Group"),
    translation: "竖脊肌群",
    memoryAid: "Long muscles along the spine, help you stand tall. To remember the name: 'Erector' means to straighten, 'spinae' refers to the spine.",
    origin: "Broad tendon from sacrum, iliac crest, lumbar and thoracic vertebrae.",
    insertion: "Ribs, transverse and spinous processes of vertebrae, mastoid process.",
    joint: "Spine",
    movement: "Extends and laterally flexes the spine.",
    exercises: [
      {
        name: "Back Extension",
        gif: "https://i0.wp.com/angrylionfitness.com/wp-content/uploads/2023/06/AngryLionFitness.com-weighted-hyperextension.gif?resize=1024%2C1024&ssl=1",
        gifAlt: "Back extension exercise"
      },
      {
        name: "Superman",
        gif: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/fitgif-friday-superman-slider-thumbnail-override-0-1492696801.gif",
        gifAlt: "Superman exercise"
      }
    ]
  },
  rotator_cuff_muscles_4: {
    name: "Rotator Cuff Muscles (4)",
    image: "",
    imageAlt: "Rotator Cuff Muscles (4) muscle anatomy",
    audio: getAudioUrl("Rotator Cuff"),
    translation: "肩袖肌群（4）",
    memoryAid: "Mnemonic missing. To remember the name: The rotator cuff is a group of four muscles that rotate and stabilize the shoulder joint.",
    origin: "Supraspinatus: supraspinous fossa; Infraspinatus: infraspinous fossa; Teres minor: lateral border of scapula; Subscapularis: subscapular fossa.",
    insertion: "Greater tubercle of humerus (supraspinatus, infraspinatus, teres minor); lesser tubercle of humerus (subscapularis).",
    joint: "Shoulder",
    movement: "Stabilizes the shoulder; rotates and abducts the arm.",
    exercises: [
      {
        name: "External Rotation with Band",
        gif: "https://sportydoctor.com/wp-content/uploads/Banded-Shoulder-External-Rotation.gif",
        gifAlt: "External rotation with band exercise"
      },
      {
        name: "Internal Rotation with Band",
        gif: "https://sportydoctor.com/wp-content/uploads/Banded-Shoulder-Internal-Rotation.gif",
        gifAlt: "Internal rotation with band exercise"
      }
    ]
  },
  supraspinatus_r1: {
    name: "Supraspinatus (R1)",
    image: "https://www.kenhub.com/thumbor/QDyoX1Vc_zQg_kdGjFtozmkAa0k=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-supraspinatus/8aopcPx9UI7nQdz1DnwhNw_6w5T7o4YpX_M._supraspinatus_1.png",
    imageAlt: "Supraspinatus (R1) muscle anatomy",
    audio: getAudioUrl("Supraspinatus"),
    translation: "冈上肌（R1）",
    memoryAid: "Starts abduction of the arm, like raising your hand to ask a question. To remember the name: 'Supraspinatus' means above the spine of the scapula.",
    origin: "Supraspinous fossa of scapula.",
    insertion: "Superior facet of greater tubercle of humerus.",
    joint: "Shoulder",
    movement: "Abducts the shoulder.",
    exercises: [
      {
        name: "Empty Can Raise",
        gif: "https://media.giphy.com/media/3o6Zt8zQwz7bT1QpAA/giphy.gif",
        gifAlt: "Empty can raise exercise"
      },
      {
        name: "Lateral Raise",
        gif: "https://www.verywellfit.com/thmb/_xudt8-GlEWif3XwX6yLKwoRPAE=/900x0/filters:no_upscale():max_bytes(150000):strip_icc()/61-4588211-dumbell-Lateral-side-Raise-GIF-7858592bcda347a9adf46886c5106e73.gif",
        gifAlt: "Lateral raise exercise"
      }
    ]
  },
  infraspinatus_r2: {
    name: "Infraspinatus (R2)",
    image: "https://www.kenhub.com/thumbor/RuIPhyf3IWnKLn5-yt-s7rFdblg=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/infraspinatus-muscle/cxgYhuVirMcwxZuxEKnHjw_gFqESBPm2A_M._infraspinatus_2.png",
    imageAlt: "Infraspinatus (R2) muscle anatomy",
    audio: getAudioUrl("Infraspinatus"),
    translation: "冈下肌（R2）",
    memoryAid: "External rotator—think of winding up to throw a ball. To remember the name: 'Infraspinatus' means below the spine of the scapula.",
    origin: "Infraspinous fossa of scapula.",
    insertion: "Middle facet of greater tubercle of humerus.",
    joint: "Shoulder",
    movement: "Externally rotates the shoulder.",
    exercises: [
      {
        name: "Side-lying External Rotation",
        gif: "https://1.bp.blogspot.com/-A34E9v-DREw/YCMmVleaTbI/AAAAAAAAAys/OORpOlOspkgjnrKPBFKsjG9uCloQOjBDgCLcBGAsYHQ/s320/side-lying-shoulder-external-rotation-with-dumbbellside-lying-dumbbell-out-rotation.gif",
        gifAlt: "Side-lying external rotation exercise"
      },
      {
        name: "Band External Rotation",
        gif: "https://media.giphy.com/media/3o6Zt8zQwz7bT1QpAA/giphy.gif",
        gifAlt: "Band external rotation exercise"
      }
    ]
  },
  teres_minor_r3: {
    name: "Teres Minor (R3)",
    image: "https://www.kenhub.com/thumbor/ktiPOTihLRl27s_RaubPuA8l_3g=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-teres-minor/iAJArxmaiB78yHylXkYg_FeDYRgt9Ko_M._teres_minor_1.png",
    imageAlt: "Teres Minor (R3) muscle anatomy",
    audio: getAudioUrl("Teres Minor"),
    translation: "小圆肌（R3）",
    memoryAid: "Small external rotator—think of fine-tuning shoulder rotation, like adjusting a knob. To remember the name: 'Teres' means rounded, 'minor' means smaller.",
    origin: "Lateral border of scapula.",
    insertion: "Inferior facet of greater tubercle of humerus.",
    joint: "Shoulder",
    movement: "Externally rotates the shoulder.",
    exercises: [
      {
        name: "Band External Rotation",
        gif: "https://media.giphy.com/media/3o6Zt8zQwz7bT1QpAA/giphy.gif",
        gifAlt: "Band external rotation exercise"
      }
    ]
  },
  subscapularis_r4: {
    name: "Subscapularis (R4)",
    image: "https://www.kenhub.com/thumbor/SFPZaQoAfiprref0iYLn9sGkQGk=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-subscapularis/kdBvHlsFOtwi0WCRxM9Jw_Subscapularis_muscle.png",
    imageAlt: "Subscapularis (R4) muscle anatomy",
    audio: getAudioUrl("Subscapularis"),
    translation: "肩胛下肌（R4）",
    memoryAid: "Internal rotator—like closing a door with your arm. To remember the name: 'Subscapularis' means under the scapula.",
    origin: "Subscapular fossa of scapula.",
    insertion: "Lesser tubercle of humerus.",
    joint: "Shoulder",
    movement: "Internally rotates the shoulder.",
    exercises: [
      {
        name: "Internal Rotation with Band",
        gif: "https://sportydoctor.com/wp-content/uploads/Banded-Shoulder-Internal-Rotation.gif",
        gifAlt: "Internal rotation with band exercise"
      }      
    ]
  },
  piriformis: {
    name: "Piriformis",
    image: "https://www.kenhub.com/thumbor/6U4h1-CAaGdMO1pT-DIbzjZ93hY=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-piriformis/0UnxBNPuUoohmlAovHgXQ_oBykvzVt4n_M._piriformis_NN_1.png",
    imageAlt: "Piriformis muscle anatomy",
    audio: getAudioUrl("Piriformis"),
    translation: "梨状肌",
    memoryAid: "Pear-shaped muscle, deep in the buttock, rotates the hip.",
    origin: "Anterior surface of sacrum.",
    insertion: "Superior border of greater trochanter of femur.",
    joint: "Hip",
    movement: "Laterally rotates and abducts the hip.",
    exercises: [
      {
        name: "Seated Piriformis Stretch",
        gif: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2024/03/400x400_What_are_the_Best_Exercises_for_Endometriosis_Seated_Piriformis_Stretch.gif",
        gifAlt: "Seated piriformis stretch exercise"
      },
      {
        name: "Figure 4 Stretch",
        gif: "https://tse2.mm.bing.net/th/id/OIP.rvJj4wrG9Qp5GvLAzuhYOQAAAA?pid=Api&P=0&h=180",
        gifAlt: "Figure 4 stretch exercise"
      }
    ]
  },
  brachioradialis: {
    name: "Brachioradialis",
    image: "https://www.kenhub.com/thumbor/9BJ-QJ-j3UytVteJWYOpE8qUhsg=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/brachioradialis-muscle/zWrLKRCYFMVdFBFt29aTEQ_TjYExfP4tz_M._brachioradialis_2.png",
    imageAlt: "Brachioradialis muscle anatomy",
    audio: getAudioUrl("Brachioradialis"),
    translation: "肱桡肌",
    memoryAid: "Forearm muscle, helps flex elbow.",
    origin: "Lateral supracondylar ridge of humerus.",
    insertion: "Styloid process of radius.",
    joint: "Elbow",
    movement: "Flexes the elbow.",
    exercises: [
      {
        name: "Hammer Curl",
        gif: "https://fitliferegime.com/wp-content/uploads/2023/12/Hammer-Curl.gif",
        gifAlt: "Hammer curl"
      },
      {
        name: "Reverse Curl",
        gif: "https://fitliferegime.com/wp-content/uploads/2023/12/Dumbbell-Reverse-Curl.gif",
        gifAlt: "Reverse curl"
      }
    ]
  },
  gluteus_medius_he: {
    name: "Gluteus Medius",
    image: "https://www.kenhub.com/thumbor/HcRztOLzDH4yMHct-mJ5kdlpqZk=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/gluteus-medius-muscle-2/dVGD75SFpFlpRbOM7CNZg_os6gu86kRw_M._gluteus_med._NN_2.png",
    imageAlt: "Gluteus Medius muscle anatomy",
    audio: getAudioUrl("Gluteus Medius"),
    translation: "臀中肌",
    memoryAid: "Side buttock muscle, stabilizes pelvis when walking.",
    origin: "External surface of ilium between anterior and posterior gluteal lines.",
    insertion: "Lateral surface of greater trochanter of femur.",
    joint: "Hip",
    movement: "Abducts and medially rotates the hip.",
    exercises: [
      {
        name: "Side-Lying Hip Abduction",
        gif: "https://www.verywellfit.com/thmb/T9ah6G2Eaiph6n0HZQV5UiUGW4o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/104--Hip-AbductionGIF-0f7b74d948f849d78864da9605a3eaa8.gif",
        gifAlt: "Side-lying hip abduction exercise"
      },
      {
        name: "Monster Walk",
        gif: "https://i.pinimg.com/originals/2d/0f/d8/2d0fd81e5703eea1dda03655cdc17253.gif",
        gifAlt: "Monster walk exercise"
      }
    ]
  },
  gluteus_minimus_he: {
    name: "Gluteus Minimus",
    image: "https://www.kenhub.com/thumbor/ubNr0_KyWc1wZ6fX_c7V5eNZ_NY=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-gluteus-minimus/bNGQBXwm9smbKz0gDbsCw_o7d1hkrGDD_M._gluteus_min._NN_1.png",
    imageAlt: "Gluteus Minimus muscle anatomy",
    audio: getAudioUrl("Gluteus Minimus"),
    translation: "臀小肌",
    memoryAid: "Smallest gluteal muscle, deep to gluteus medius.",
    origin: "External surface of ilium between anterior and inferior gluteal lines.",
    insertion: "Anterior surface of greater trochanter of femur.",
    joint: "Hip",
    movement: "Abducts and medially rotates the hip.",
    exercises: [
      {
        name: "Clamshell",
        gif: "https://www.spotebi.com/wp-content/uploads/2017/11/resistance-band-clamshell-exercise-illustration-spotebi.gif",
        gifAlt: "Clamshell exercise"
      },
      {
        name: "Side-Lying Leg Raise",
        gif: "https://fitliferegime.com/wp-content/uploads/2023/10/Band-Side-Lying-Leg-Lift.gif",
        gifAlt: "Side-lying leg raise exercise"
      }
    ]
  },
  tensor_fascia_latae_ba_abd: {
    name: "Tensor Fascia Latae",
    image: "https://www.kenhub.com/thumbor/J5NVJ0xZYUncfeLDmRy7t75xT_s=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-tensor-fasciae-latae/wPdBwbZr9EmSJxFBcMZKSw_CbhgeuzrP6_M._tensor_fasciae_latae_NN_1.png",
    imageAlt: "Tensor Fascia Latae muscle anatomy",
    audio: getAudioUrl("Tensor Fascia Latae"),
    translation: "阔筋膜张肌",
    memoryAid: "Small muscle on outer hip, tightens the iliotibial band.",
    origin: "Anterior iliac crest and anterior superior iliac spine (ASIS).",
    insertion: "Iliotibial tract (IT band), which attaches to lateral condyle of tibia.",
    joint: "Hip",
    movement: "Abducts, flexes, and medially rotates the hip.",
    exercises: [
      {
        name: "Standing Hip Abduction",
        gif: "https://leadingedgeny.com/wp-content/uploads/2021/11/Standing-hip-abduction.gif",
        gifAlt: "Standing hip abduction exercise"
      },
      {
        name: "Side Step with Band",
        gif: "https://media1.popsugar-assets.com/files/thumbor/LktT6RrmLCKSt2k-hfS9GoqgxOo/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2017/06/05/958/n/1922729/07704bab05a6bd8b_68c447d0878f9f3a_Side-Step.xxxlarge/i/Side-Steps-Booty-Band.gif",
        gifAlt: "Side step with band exercise"
      }
    ]
  },
  adductor_group_5: {
    name: "Adductor Group",
    image: "https://www.kenhub.com/thumbor/LVoyCXrkVRWSESflnfZBRZztL-0=/fit-in/800x1600/filters:watermark(/images/logo_url.png,-10,-10,0):background_color(FFFFFF):format(jpeg)/images/library/14012/Hip_adductors.png",
    imageAlt: "Adductor Group muscle anatomy",
    audio: getAudioUrl("Adductor Group"),
    translation: "收肌群",
    memoryAid: "Inner thigh muscles, pull legs together.",
    origin: "Pubis and ischium (varies by muscle: adductor longus, brevis, magnus, gracilis, pectineus).",
    insertion: "Linea aspera of femur (adductors), medial surface of tibia (gracilis), pectineal line (pectineus).",
    joint: "Hip",
    movement: "Adducts the hip.",
    exercises: [
      {
        name: "Standing Hip Adduction",
        gif: "https://www.sparkpeople.com/assets/exercises/Standing-Adduction.gif",
        gifAlt: "Standing hip adduction exercise"
      },
      {
        name: "Side-Lying Hip Adduction",
        gif: "https://www.spotebi.com/wp-content/uploads/2016/09/lying-side-hip-abduction-exercise-illustration-spotebi.gif",
        gifAlt: "Side-lying hip adduction exercise"
      }
    ]
  },
  quadriceps_4: {
    name: "Quadriceps",
    image: "https://www.kenhub.com/thumbor/08O0Lk96jBOozWw5dFgEB1G6MaM=/fit-in/800x1600/filters:watermark(/images/logo_url.png,-10,-10,0):background_color(FFFFFF):format(jpeg)/images/library/13926/Op0rOgXqQB5W7THiS8Q_NmqapCoy4Z_M._quadriceps_femoris_NN_2__1_.png",
    imageAlt: "Quadriceps muscle anatomy",
    audio: getAudioUrl("Quadriceps"),
    translation: "股四头肌",
    memoryAid: "Front thigh muscles, extend the knee.",
    origin: "Rectus femoris: AIIS; Vastus lateralis: greater trochanter and linea aspera; Vastus medialis: linea aspera; Vastus intermedius: anterior and lateral femur.",
    insertion: "Patella via quadriceps tendon and tibial tuberosity via patellar ligament.",
    joint: "Knee",
    movement: "Extends the knee.",
    exercises: [
      {
        name: "Squat",
        gif: "https://www.verywellfit.com/thmb/-i6U4nnLmsBUIqs8SvuUyhEkMeM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/79--Sumo-SquatGIF-df6fd051e5c1451f93e6e5fa5b6b420f.gif",
        gifAlt: "Squat exercise"
      },
      {
        name: "Leg Extension",
        gif: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/fitgif9-29-tnoverride-1515519049.gif",
        gifAlt: "Leg extension exercise"
      }
    ]
  },
  rectus_femoris: {
    name: "Rectus Femoris",
    image: "https://www.kenhub.com/thumbor/_UTw2MJJ6acgAPDsZHOO5ZcW-fY=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-rectus-femoris/u9CG8USFzTYEGjoOaFKyBA_rectus_femoris_muscle.png",
    imageAlt: "Rectus Femoris muscle anatomy",
    audio: getAudioUrl("Rectus Femoris"),
    translation: "股直肌",
    memoryAid: "Central quadriceps muscle, crosses both hip and knee. To remember the name: 'Rectus' means straight, 'femoris' refers to the femur (thigh bone).",
    origin: "Anterior inferior iliac spine (AIIS) and superior part of acetabulum.",
    insertion: "Patella via quadriceps tendon and tibial tuberosity via patellar ligament.",
    joint: "Hip, Knee",
    movement: "Flexes the hip and extends the knee.",
    exercises: [
      {
        name: "Leg Extension",
        gif: "https://archive.org/download/leg-extension/LEG%20EXTENSION.gif",
        gifAlt: "Leg extension exercise"
      },
      {
        name: "Squat",
        gif: "https://www.verywellfit.com/thmb/-i6U4nnLmsBUIqs8SvuUyhEkMeM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/79--Sumo-SquatGIF-df6fd051e5c1451f93e6e5fa5b6b420f.gif",
        gifAlt: "Squat exercise"
      }
    ]
  },
  sternocleidomastoid: {
    name: "Sternocleidomastoid",
    image: "https://www.kenhub.com/thumbor/6Ff78ISX5ghOWgMB2tO1KnJJCsQ=/fit-in/680x680/filters:fill(FFFFFF,true):watermark(/logos/logo_url.png,-10,-10,0):format(jpeg)/images/learnable/musculus-sternocleidomastoideus/suIZxIBsRiV22bQrV394bQ_Musculus_sternocleidomastoideus_01.png",
    imageAlt: "Sternocleidomastoid muscle anatomy",
    audio: getAudioUrl("Sternocleidomastoid"),
    translation: "胸锁乳突肌",
    memoryAid: "Neck muscle, turns and tilts the head. To remember the name: 'Sterno' refers to the sternum, 'cleido' to the clavicle, 'mastoid' to the mastoid process of the skull.",
    origin: "Manubrium of sternum and medial third of clavicle.",
    insertion: "Mastoid process of temporal bone and superior nuchal line of occipital bone.",
    joint: "Neck (cervical spine)",
    movement: "Flexes, rotates, and laterally bends the neck.",
    exercises: [
      {
        name: "Neck Isometrics",
        gif: "https://www.spotebi.com/wp-content/uploads/2016/09/neck-isometric-exercise-illustration-spotebi.gif",
        gifAlt: "Neck isometric exercise"
      },
      {
        name: "Neck Flexion Stretch",
        gif: "https://liftmanual.com/wp-content/uploads/2023/04/forward-flexion-neck-stretch.gif",
        gifAlt: "Neck flexion stretch exercise"
      }
    ]
  },
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
