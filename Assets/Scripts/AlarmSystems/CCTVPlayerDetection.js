#pragma strict
 
private var player : GameObject;                                // Reference to the player.
private var lastPlayerSighting : LastPlayerSighting;        	// Reference to the global last sighting of the player.
 
function Awake(){
    // Setting up the references.
    player = GameObject.FindGameObjectWithTag(Tags.player);
    lastPlayerSighting = GameObject.FindGameObjectWithTag(Tags.gameController).GetComponent(LastPlayerSighting);
}
 
function OnTriggerStay (other : Collider){
    // If the colliding gameobject is the player then raycast from the camera towards the player.
    if(other.gameObject == player){ 
        var relPlayerPos : Vector3 = player.transform.position - transform.position;
        var hit : RaycastHit;
        
        //If the raycast hits the player set the last global sighting of the player to the player's position.
        if(Physics.Raycast(transform.position, relPlayerPos, hit)){
            if(hit.collider.gameObject == player){
                lastPlayerSighting.position = player.transform.position;
            }
        }
    }
}
