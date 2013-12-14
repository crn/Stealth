#pragma strict
 
private var player : GameObject;                            //A reference to the player.
private var lastPlayerSighting : LastPlayerSighting;        //A reference to the global last sighting of the player.
 
function Awake(){
    //Setting up references.
    player = GameObject.FindGameObjectWithTag(Tags.player);
    lastPlayerSighting = GameObject.FindGameObjectWithTag(Tags.gameController).GetComponent(LastPlayerSighting);
}
 
function OnTriggerStay(other : Collider){
    // If the beam is on and if the colliding gameobject is the player then set the last global sighting of the player to the colliding object's position.
    if(renderer.enabled){
        if(other.gameObject == player){
            lastPlayerSighting.position = other.transform.position;
        }
    }
}