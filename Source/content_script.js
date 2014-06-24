walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bThe Cloud\b/g, "My Butt");
	v = v.replace(/\bThe cloud\b/g, "My butt");
	v = v.replace(/\bthe Cloud\b/g, "my Butt");
	v = v.replace(/\bthe cloud\b/g, "my butt");
	v = v.replace(/\blight weight\b/g, "dog-ass slow");
	v = v.replace(/\blight-weight\b/g, "dog-ass slow");
	v = v.replace(/\blight-weight\b/g, "Dog-ass slow");
	v = v.replace(/\bLight weight\b/g, "Dog-ass slow");
	v = v.replace(/\bLight Weight\b/g, "Dog-Ass Slow");
	v = v.replace(/\bLightweight\b/g, "Dog-ass slow");
	v = v.replace(/\blightweight\b/g, "dog-ass slow");

	textNode.nodeValue = v;
}


