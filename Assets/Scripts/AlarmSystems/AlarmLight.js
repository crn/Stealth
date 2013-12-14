#pragma strict

public var fadeSpeed : float = 2f;		//How fast the light will fade between intensities
public var highIntensity : float = 2f;	//The maximum intensity of the light while the alarm is on
public var lowIntensity : float = 0.5f; //The minimum intensity of the light while the alarm is on
public var changeMargin : float = 0.2f; //The margin within which the intensity is changed
public var alarmOn : boolean;			//Indicates whether or not the alarm is on

private var targetIntensity : float;	//The intensity that the light is currently aiming for

function Awake(){
	light.intensity = 0f;	//When the level starts the light is set to off
	targetIntensity = highIntensity;	//When the alarm initially goes off, the light should aim for the highest intensity
}

function update(){
	if(alarmOn){
		//Move the current intensity towards the target value
		light.intensity = Mathf.Lerp(light.intensity, targetIntensity, fadeSpeed * Time.deltaTime);
		
		//Check if the target intensity needs to be changed, and change it if needed
		CheckTargetIntensity();
	}
	else{
		//If the alarm is not on, move the intensity to zero
		light.intensity = Mathf.Lerp(light.intensity, 0f, fadeSpeed * Time.deltaTime);
	}
}

function CheckTargetIntensity(){
	//If the difference between the currrent and target intensities is less than the change margin
	if(Mathf.Abs(targetIntensity - light.intensity) < changeMargin){
		//If the target intensity is high, then change the target intensity to low
		if(targetIntensity == highIntensity){
			targetIntensity = lowIntensity;
		}
		//Otherwise set the target intensity to high
		else{
			targetIntensity = highIntensity;
		}
	}
}