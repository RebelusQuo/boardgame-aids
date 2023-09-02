{{
import fromPairs from 'lodash/fromPairs';
import trimEnd from 'lodash/trimEnd';
import join from 'lodash/join';
}}

{
let indents = [0];
}

start
  = skipped* @( value / empty )

empty
  = eof { return null; }

value
  = list
  / dict
  / multiline_string

list
  = items:( @list_item skipped* )+

list_item
  = level '- ' @$( !nl . )* eol
  / level '-' eol skipped* inner:( indent @value dedent )? { return inner || ''; }

dict
  = items:( @dict_item skipped* )+ { return fromPairs(items); }

dict_item
  = level key:singleline_key ': ' value:$( !nl . )* eol { return [key, value]; }
  / level key:singleline_key ':' eol skipped* inner:( indent @value dedent )? { return [key, inner || '']; }

singleline_key
  = key:$(
      !( nl / string_tag / list_tag / key_tag / [[{] ) .
      ( !( nl / key_tag ) . )*
    ) { return trimEnd(key); }

multiline_string
  = items:( @string_item skipped* )+ { return join(items, '\n'); }

string_item
  = level '> ' @$( !nl . )* eol
  / level '>' eol { return ''; }

skipped
  = blank
  / comment

blank
  = nl
  / ws+ eol

comment
  = ws* '#' ( !nl . )* eol

level
  = indent:$s* &{ return indent.length === indents[0]; }

indent
  = &(
    indent:$s+ &{ return indent.length > indents[0]; } {
      indents = [indent.length, ...indents];
    }
  )

dedent // Requires disabled cache
  = &{ [, ...indents] = indents; return true; }

string_tag
  = '> ' / '>' nl

list_tag
  = '- ' / '-' nl

key_tag
  = ': ' / ':' nl

s
  = ' '

ws
  = [ \t\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]

eol
  = nl
  / eof

nl 'newline'
  = '\r\n'
  / '\n'
  / '\r'

eof
  = !.
