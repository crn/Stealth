#pragma strict
 
public var onTime : float;          // The amount of time in seconds the laser is on.
public var offTime : float;         // The amount of time in seconds the laser is off.
 
private var timer : float;          // Timer to time the laser blinking.
 
function Update (){
    // Increment the timer by the amount of time since the last frame.
    timer += Time.deltaTime;
    
    // If the beam is on and the onTime has been reached then switch the beam.
    if(renderer.enabled && timer >= onTime){
        SwitchBeam();
    }
    
    // If the beam is off and the offTime has been reached then switch the beam.
    if(!renderer.enabled && timer >= offTime){
        SwitchBeam();
    }
}
 
function SwitchBeam(){
    // Reset the timer.
    timer = 0f;
    
    // Switch whether the beam and light are on or off.
    renderer.enabled = !renderer.enabled;
    light.enabled = !light.enabled;
}