path = 'e:/BexaVolt Project/frontend/src/app/products/volt-mini/page.tsx'
lines = open(path, encoding='utf-8').readlines()

# Lines 415-431 (0-indexed: 414-430) are corrupted.
# Replace them with properly closed Google Play SVG + closing tags
good = [
    "                <svg width=\"120\" height=\"40\" viewBox=\"0 0 120 40\" style={{ cursor: 'pointer', borderRadius: '5px' }}>\n",
    "                  <rect width=\"120\" height=\"40\" fill=\"#000\" rx=\"6\" stroke=\"#222\" />\n",
    "                  <polygon points=\"12,10 12,30 25,20\" fill=\"#A3E635\" />\n",
    "                  <text x=\"35\" y=\"18\" fill=\"#fff\" fontSize=\"7\" fontWeight=\"600\" fontFamily=\"sans-serif\">GET IT ON</text>\n",
    "                  <text x=\"35\" y=\"30\" fill=\"#fff\" fontSize=\"11\" fontWeight=\"bold\" fontFamily=\"sans-serif\">Google Play</text>\n",
    "                </svg>\n",
    "              </div>\n",
    "            </div>\n",
    "\n",
    "          </div>\n",
    "        </div>\n",
    "      </section>\n",
    "\n",
]

new_lines = lines[:414] + good + lines[431:]
open(path, 'w', encoding='utf-8', newline='').writelines(new_lines)
print('Done! Total lines:', len(new_lines))
