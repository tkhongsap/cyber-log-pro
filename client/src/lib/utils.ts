import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Combine class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format ISO timestamp to readable format
export function formatTimestamp(timestamp: string): string {
  try {
    return new Date(timestamp).toLocaleString();
  } catch (error) {
    return timestamp;
  }
}

// JSON syntax highlighting
export function syntaxHighlight(json: string): string {
  if (!json) return '';
  
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
    let cls = 'json-number';
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        cls = 'json-key';
        match = match.replace(/"/g, '').replace(/:$/, '');
        return '<span class="' + cls + '">"' + match + '":</span>';
      } else {
        cls = 'json-string';
      }
    } else if (/true|false/.test(match)) {
      cls = 'json-boolean';
    } else if (/null/.test(match)) {
      cls = 'json-null';
    }
    return '<span class="' + cls + '">' + match + '</span>';
  });
}
