#pragma strict
 
public var laser : GameObject;              // Reference to the laser that can be turned off at this switch.
public var unlockedMat : Material;          // The screens material to show the laser has been unlocked.
 
private var player : GameObject;            // Reference to the player.
 
function Awake(){
    // Setting up the reference.
    player = GameObject.FindGameObjectWithTag(Tags.player);
}
 
function OnTriggerStay(other : Collider){
    // If the colliding gameobject is the player and the switch button is pressed deactivate the laser.
    if(other.gameObject == player){
        if(Input.GetButton("Switch")){
            LaserDeactivation();
        }
    }
}
 
function LaserDeactivation(){
    // Deactivate the laser GameObject.
    laser.SetActive(false);
    
    // Store the renderer component of the screen.
    var screen : Renderer = transform.Find("prop_switchUnit_screen_001").renderer;
    
    // Change the material of the screen to the unlocked material.
    screen.material = unlockedMat;
    
    // Play switch deactivation audio clip.
    audio.Play();
}