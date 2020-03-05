"use strict";
require("dotenv").config();
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Exercises",
      [
        {
          id: 1,
          categoryId: 1,
          category: "Arms",
          name: "Biceps Curls With Barbell",
          equipment: "Barbell",
          description:
            "Hold the Barbell shoulder-wide, the back is straight, the shoulders slightly back, the arms are streched. Bend the arms, bringing the weight up, with a fast movement. Without pausing, let down the bar with a slow and controlled movement. Do not allow your body to swing during the exercise, all work is done by the biceps, which are the only mucles that should move."
        },
        {
          id: 2,
          categoryId: 1,
          category: "Arms",
          name: "Bench Press Narrow Grip",
          equipment: "Barbell, Bench",
          description:
            "Lay down on a bench, the bar is directly over your eyes, the knees form a slight angle and the feet are firmly on the ground. Hold the bar with a narrow grip (around 20cm.). Lead the weight slowly down till the arms are parallel to the floor (elbow: right angle), press then the bar up. When bringing the bar down, don't let it down on your nipples as with the regular bench pressing, but somewhat lower"
        },
        {
          id: 3,
          categoryId: 1,
          category: "Arms",
          name: "Biceps Curls With Dumbbell",
          equipment: "Dumbbell",
          description:
            "Hold two barbells, the arms are streched, the hands are on your side, the palms face inwards. Bend the arms and bring the weight with a fast movement up. At the same time, rotate your arms by 90 degrees at the very beginning of the movement. At the highest point, rotate a little the weights further outwards. Without a pause, bring them down, slowly. Don't allow your body to swing during the exercise, all work is done by the biceps, which are the only mucles that should move (pay attention to the elbows)."
        },
        {
          id: 4,
          categoryId: 1,
          category: "Arms",
          name: "Dips",
          equipment: "None",
          description:
            "Hold onto the bars at a narrow place (if they are not parallel) and press yourself up, but don't stretch the arms completely, so the muscles stay during the whole exercise under tension. Now bend the arms and go down as much as you can, keeping the elbows always pointing back, At this point, you can make a short pause before repeating the movement."
        },
        {
          id: 5,
          categoryId: 1,
          category: "Arms",
          name: "push ups",
          equipment: "none (bodyweight exercise)",
          description:
            "Start with your body streched, your hands are shoulder-wide appart on the ground. Push yourself off the ground till you strech your arms. The back is always straight and as well as the neck (always look to the ground). Lower yourself to the initial position and repeat."
        },
        {
          id: 6,
          categoryId: 2,
          category: "Legs",
          name: "Barbell Hack Squats",
          equipment: "Barbell",
          description: "Perform leg squats with barbell behind your legs."
        },
        {
          id: 7,
          categoryId: 2,
          category: "Legs",
          name: "Braced Squat",
          equipment: "None",
          description:
            "Stand with feet slightly wider than shoulder-width apart, while standing as tall as you can. Grab a weight plate and hold it out in front of your body with arms straight out. Keep your core tight and stand with a natural arch in your back. Now, push hips back and bend knees down into a squat as far as you can. Hold for a few moments and bring yourself back up to the starting position."
        },
        {
          id: 8,
          categoryId: 2,
          category: "Legs",
          name: "Dumbbell Lunges Walking",
          equipment: "Dumbbell",
          description:
            "Take two dumbbells in your hands, stand straight, feet about shoulder wide. Take one long step so that the front knee is approximately forming a right angle. The back leg is streched, the knee is low but doesn't touch the ground. Complete the step by standing up and repeat the movement with the other leg."
        },
        {
          id: 9,
          categoryId: 2,
          category: "Legs",
          name: "High Knee Jumps",
          equipment: "none",
          description:
            "Start with legs slightly wider than shoulder width. Drop into a bodyweight squat. As you hit the bottom of the squat, explode upwards into a jump while simultaneously tucking your knees into your chest midflight.  Remain tucked until the apex of your jump.Land on both feet, making sure your knees are not locked so as to avoid excessive strain upon your joints.  Collect yourself into the next rep as quickly but under control as possible."
        },
        {
          id: 10,
          categoryId: 2,
          category: "Legs",
          name: "Run",
          equipment: "none",
          description: "Running or jogging outside in a park, on the tracks"
        },
        {
          id: 11,
          categoryId: 3,
          category: "ABS",
          name: "Crunches",
          equipment: "Bench, Gym mat",
          description:
            "Lay down on your back a soft surface, the feet are on the floor. Ask a partner or use some other help (barbell, etc.) to keep them fixed, your hands are behind your head. From this position move your upper body up till your head or elbows touch your knees. Do this movement by rolling up your back."
        },
        {
          id: 12,
          categoryId: 3,
          category: "ABS",
          name: "Crunches With Legs Up",
          equipment: "none",
          description:
            "On your back, legs extended straight up, reach toward your toes with your hands and lift your shoulder blades off the ground and back."
        },
        {
          id: 13,
          categoryId: 3,
          category: "ABS",
          name: "Flutter Kicks",
          equipment: "none",
          description:
            "-Laying on the back, lift your straightened legs from the ground at a 45 degree angle. -As your Left foot travels downward and nearly touches the floor, your Right foot should seek to reach a 90 degree angle, or as close to one as possible. -Bring your R foot down until it nearly touches the floor, and bring your L foot upwards.  Maintain leg rigidity throughout the exercise.  Your head should stay off the ground, supported by tightened upper abdominals.-Primarily works the Rectus Abdominus, the hip flexors and the lower back. Secondarily works the Obliques.  Emphasis placed on the lower quadrant of the abs."
        },
        {
          id: 14,
          categoryId: 3,
          category: "ABS",
          name: "Plank",
          equipment: "none (bodyweight exercise)",
          description:
            "Get into a position on the floor supporting your weight on your forearms and toes. Arms are bent and directly below the shoulder. Keep your body straight at all times and hold this position as long as possible. To increase difficulty an arm or leg can be raised while performing this exercise.  "
        },
        {
          id: 15,
          categoryId: 3,
          category: "ABS",
          name: "Turkish Get-Up",
          equipment: "Dumbbell",
          description:
            "Starting on back, move to the standing position with dumbbell in one hand.  Switch hands between reps."
        },
        {
          id: 16,
          categoryId: 4,
          category: "Chest",
          name: "Bench Press",
          equipment: "Barbell , Bench",
          description:
            "Lay down on a bench, the bar should be directly above your eyes, the knees are somewhat angled and the feet are firmly on the floor. Concentrate, breath deeply and grab the bar more than shoulder wide. Bring it slowly down till it briefly touches your chest at the height of your nipples. Push the bar up. If you train with a high weight it is advisable to have a spotter that can help you up if you can't lift the weight on your own."
        },
        {
          id: 17,
          categoryId: 4,
          category: "Chest",
          name: "Benchpress Dumbbells",
          equipment: "Bench , Dumbbell",
          description:
            "The movement is very similar to benchpressing with a barbell, however, the weight is brought down to the chest at a lower point. Hold two dumbbells and lay down on a bench. Hold the weights next to the chest, at the height of your nipples and press them up till the arms are stretched. Let the weight slowly and controlled down."
        },
        {
          id: 18,
          categoryId: 4,
          category: "Chest",
          name: "Incline Pushups",
          equipment: "none",
          description: "Regular push with a 30 degree incline."
        },
        {
          id: 19,
          categoryId: 4,
          category: "Chest",
          name: "Butterfly",
          equipment: "machine",
          description:
            "Sit on the butterfly machine, the feet have a good contact with the floor, the upper arms are parallel to the floor. Press your arms together till the handles are practically together (but aren't!). Go slowly back. The weights should stay all the time in the air."
        },
        {
          id: 20,
          categoryId: 4,
          category: "Chest",
          name: "Upper External Oblique",
          equipment: "Pull-up bar",
          description: "Exercise for upper external oblique muscles"
        },
        {
          id: 21,
          categoryId: 5,
          category: "Back",
          name: "Bent Over Rowing",
          equipment: "Barbell",
          description:
            "Grab the barbell with a wide grip (slightly more than shoulder wide) and lean forward. Your upper body is not quite parallel to the floor, but forms a slight angle. The chest's out during the whole exercise. Pull now the barbell with a fast movement towards your belly button, not further up. Go slowly down to the initial position. Don't swing with your body and keep your arms next to your body."
        },
        {
          id: 22,
          categoryId: 5,
          category: "Back",
          name: "Chin-ups",
          equipment: "Pull-up bar",
          description: "Like pull-ups but with a reverse grip"
        },
        {
          id: 23,
          categoryId: 5,
          category: "Back",
          name: "Hyperextensions",
          equipment: "none",
          description:
            "Lay on the hyperextension pad with the belly button just at the leading edge, the upper body can hang freely. Tense your whole back's muscles and bring your upper body up till it is horizontal, but not more. Go slowly down and don't relax your muscles."
        },
        {
          id: 24,
          categoryId: 5,
          category: "Back",
          name: "Long-Pulley (low Row)",
          equipment: "machine",
          description:
            "Sit down, put your feet on the supporting points and grab the bar with a wide grip. Pull the weight with a rapid movement towards your belly button, not upper. Keep your arms and elbows during the movement close to your body. Your shoulders are pulled together. Let the weight slowly down till your arms are completely stretched."
        },
        {
          id: 25,
          categoryId: 5,
          category: "BAck",
          name: "Superman",
          equipment: "Gym mat",
          description:
            "Lay flat on your stomach with your arms extended in front of you on the ground as your legs are lying flat. Lift both your arms and legs at the same time, as if you were flying, and contract the lower back. Make sure that you are breathing and, depending on your fitness level, hold the movement for at least two to five seconds per repetition."
        },
        {
          id: 26,
          categoryId: 6,
          category: "Shoulders",
          name: "Bent High Pulls",
          equipment: "Dumbbell",
          description:
            "Bend over slightly while holding two dumbbells.  Pull the dumbbells up to your chest, keeping your elbows as high as you can."
        },
        {
          id: 27,
          categoryId: 6,
          category: "Shoulders",
          name: "Front Raises",
          equipment: "Barbell , Dumbbell",
          description:
            "To execute the exercise, the lifter stands with their feet shoulder width apart and weights or resistance handles held by their side with a pronated (overhand) grip. The movement is to bring the arms up in front of the body to eye level and with only a slight bend in the elbow. This isolates the anterior deltoid muscle (front of the shoulder) and uses the anterior deltoid to lift the weight. When lifting it is important to keep the body still so the anterior deltoid is fully utilised; if the weight cannot be lifted by standing still then it is too heavy and a lower weight is needed. It is important to keep a slight bend in the elbow when lifting as keeping the elbow locked will add stress to the elbow joint and could cause injury. A neutral grip, similar to that used in the hammer curl, can also be used. With this variation the weight is again raised to eye level, but out to a 45 degree angle from the front of the body. This may be beneficial for those with shoulder injuries, particularly those related to the rotator cuff."
        },
        {
          id: 28,
          categoryId: 6,
          category: "Shoulders",
          name: "High Pull",
          equipment: "none",
          description:
            "Use a light barbell, perform explosive lift up starting from underneath knee cap level. Lift/raise explosively using hips, at shoulder level. Tempo: 2111"
        },
        {
          id: 29,
          categoryId: 6,
          category: "Shoulders",
          name: "Lateral Raises",
          equipment: "Dumbbell",
          description: "Hands to the sides and fly"
        },
        {
          id: 30,
          categoryId: 6,
          category: "Shoulders",
          name: "TWall Handstand",
          equipment: "none (bodyweight exercise)",
          description:
            "Handstand against a wall for support (chest facing wall)."
        },
        {
          id: 31,
          categoryId: 7,
          category: "Calves",
          name: "Calf Press Using Leg Press Machine",
          equipment: "Machine",
          description:
            "Put  the balls of your feet on an extended leg press pad.  Use your calves to press the weight by flexing your feet/toes into a pointed position, and releasing back into a relaxed position. This exercise builds mass and strength in the Gastrocnemius and Soleus muscles as well, if not better, than any calf exercise."
        },
        {
          id: 32,
          categoryId: 7,
          category: "Calves",
          name: "Calf Raises on Hackenschmitt Machine",
          equipment: "Machine",
          description:
            "Place yourself on the machine with your back firmly against the backrest, the feet are on the platform for calf raises. Check that the feet are half free and that you can completely stretch the calf muscles down. With straight knees pull up your weight as much as you can. Go with a fluid movement down till the calves are completely stretched. Repeat."
        },
        {
          id: 33,
          categoryId: 7,
          category: "Calves",
          name: "Sitting Calf Raises",
          equipment: "none",
          description:
            "Sit on a bench for calf raises and check that the feet are half free and that you can completely stretch the calf muscles down. Pull your calves up, going as far (up) as you can. Make at the highest point a short pause of 1 or 2 seconds and go down."
        },
        {
          id: 34,
          categoryId: 7,
          category: "Calves",
          name: "Skipping - Standard",
          equipment: "none (bodyweight exercise)",
          description:
            "Do a single, double footed jump for each swing of the rope. Work on a smooth, rhythmical movement, bouncing lightly on the balls of your feet."
        },
        {
          id: 35,
          categoryId: 7,
          category: "Calves",
          name: "TStanding Calf Raises",
          equipment: "none (bodyweight exercise)",
          description:
            "Get onto the calf raises machine, you should able to completely push your calves down. Stand straight, don't make a hollow back and don't bend your legs. Pull yourself up as high as you can. Make a small pause of 1 - 2 seconds and go slowly down."
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
