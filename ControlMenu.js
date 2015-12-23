var isNewGameButton = false;
var isLevelButton = false;
var isLevel2Button = false;
var isMenuButton = false;
var isQuitButton = false;
var camera1 : Camera;
var camera2 : Camera;

function OnMouseEnter()
{
    GetComponent.<Renderer>().material.color = Color.red;
}

function OnMouseExit()
{
    GetComponent.<Renderer>().material.color = Color.white;
}

function OnMouseUp()
{
    if (isQuitButton)
    {
        Application.Quit();
    }
    else if (isLevelButton)
    {
        camera1.enabled = false;
        camera2.enabled = true;
    }
    else if (isLevel2Button)
    {
        Application.LoadLevel (2);
    }
    else if (isMenuButton)
    {
        Application.LoadLevel (0);
    }
    else if (isNewGameButton)
    {
        Application.LoadLevel (1);
    }

}

