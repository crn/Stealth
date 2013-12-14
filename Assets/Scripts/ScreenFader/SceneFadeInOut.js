	#pragma strict
	
	public var fadeSpeed : float = 1.5f;		//The speed with which the screen fades to and from black.
	
	private var sceneStarting : boolean = true; //Determines whether or not the scene is still fading in.
	
	function Awake(){
		//Sets the texture so that it is the size of the screen and covers it.
		guiTexture.pixelInset = new Rect(0f, 0f, Screen.width, Screen.height);
	}
	
	function Update(){
		//If the scene is starting then call the StartScene function.
		if(sceneStarting){
			StartScene();
		}
	}
	
	function FadeToClear(){
		//Lerp the color of the texture between itself and transparent.
		guiTexture.color = Color.Lerp(guiTexture.color, Color.clear, fadeSpeed * Time.deltaTime);
	}
	
	function FadeToBlack(){
		//Lerp the color of the texture between itself and black.
		guiTexture.color = Color.Lerp(guiTexture.color, Color.black, fadeSpeed * Time.deltaTime);
	}
	
	function StartScene(){
		//Fade the texture to clear.
		FadeToClear();
		
		//If the texture is almost clear set color to clear, disable the guiTexture, and set sceneStarting to false.
		if(guiTexture.color.a <= 0.05f){
			guiTexture.color = Color.clear;
			guiTexture.enabled = false;
			sceneStarting = false;
		}
	}
	
	public function EndScene(){
		//Makes sure the texture is enabled.
		guiTexture.enabled = true;
		
		//Start fading towards black.
		FadeToBlack();
		
		//If the screen is almost black then reload the level.
		if(guiTexture.color.a >= 0.95f){
			Application.LoadLevel(1);
		}
	}