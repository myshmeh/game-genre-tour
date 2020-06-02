<!-- 
    theme: one damage, then game over
    user story
    1. start a scene
    2. loop (beat a boss) :
       1. dodge enemy bullets
       2. if (!dodged)
          1. take a damage
       3. attack enemies
       4. if (dead)
          1. end game
    3. clear
 -->
# TODO
 - [ ] transitions
   - [ ] game opening to gameplay
   - [ ] to game clear
   - [ ] to game over
     - [ ] may not be a separate scene (more of overlap of half-transparent screen)
 - [ ] character params design
   - [ ] e.g. enemy hp
 - [ ] stage design
 - [ ] fx
   - [ ] player explosion
   - [ ] enemy explosion
   - [ ] enemy damaged
   - [ ] bullet angle
 - [ ] art
   - [ ] graphics
   - [ ] sounds
# DOING
# DONE
- [x] player behaviour
  - [x] move
  - [x] launch a bullet
  - [x] take a damage when collided with bullets
  - [x] die when 0 life point
  - [x] collision with enemy
- [x] enemy behaviour
  - [x] move
  - [x] take a damage when collided with bullets
  - [x] die when 0 life point
  - [x] schedule behaviour
  - [x] launch a bullet
- [x] scene management
  - [x] create a game play scene
  - [x] game over fx
  - [x] game clear fx
- [x] enemy spwan manager
  - [x] schedule enemy spawn
- [x] boss behaviour
  - [x] move
  - [x] launch a bullet
  - [x] schedule behaviour
  - [x] take a damage when collided with bullets
  - [x] die when 0 life point