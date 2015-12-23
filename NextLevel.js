public var i = 0;
private var inRange: boolean = false;

 
function OnTriggerEnter(other:Collider) {
    if (other.tag == "Player") {
        inRange =  true;
    }
}
 
    function OnTriggerExit(other:Collider) {
        if (other.tag == "Player") {
            inRange =  false;
        }
    }
 
        function OnGUI() {
            if(inRange) {
                GUI.Label (Rect (960, 512, 1000, 50),"Congratulations : Level Completed!");
                Application.LoadLevel(2);
                                                                           
             
            }
        }

