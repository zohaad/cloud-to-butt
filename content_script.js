walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

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

	v = v.replace(/\bData Science\b/g, "Bad Statistics");
	v = v.replace(/\bData science\b/g, "Bad statistics");
	v = v.replace(/\bdata Science\b/g, "bad Statistics");
	v = v.replace(/\bdata science\b/g, "bad statistics");
	
	textNode.nodeValue = v;
}
<<<<<<< HEAD

=======
>>>>>>> 3e421bcb5655d8ec018de6bb9d2ba958bb755204
