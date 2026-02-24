const fs = require('fs');
let content = fs.readFileSync('src/components/ComparisonTable.tsx', 'utf8');

// 1. Remove forced min-width and horizontal scroll
content = content.replace('w-full overflow-x-auto custom-scrollbar pb-8 rounded-t-[12px]', 'w-full pb-8 rounded-t-[12px]');
content = content.replace('min-w-[900px] md:min-w-full flex flex-col drop-shadow-sm', 'w-full flex flex-col drop-shadow-sm');

// 2. Adjust icons size
content = content.replace(/w-\[24px\] md:w-\[28px\]/g, 'w-[14px] sm:w-[18px] md:w-[28px]');
content = content.replace(/h-\[24px\] md:h-\[28px\]/g, 'h-[14px] sm:h-[18px] md:h-[28px]');
content = content.replace(/w-\[14px\] md:w-\[16px\]/g, 'w-[8px] sm:w-[10px] md:w-[16px]');
content = content.replace(/h-\[14px\] md:h-\[16px\]/g, 'h-[8px] sm:h-[10px] md:h-[16px]');

// 3. Grid cell padding and gaps
content = content.replace(/p-\[14px\]/g, 'p-1.5 sm:p-2 md:p-[14px]');
content = content.replace(/gap-3/g, 'gap-1 md:gap-3');

// 4. Text sizing
content = content.replace(/text-\[16px\] md:text-\[19px\] text-\[#16181B\]/g, 'text-[8px] sm:text-[11px] md:text-[19px] text-[#16181B] leading-tight');
content = content.replace(/text-\[16px\] md:text-\[20px\]/g, 'text-[9px] sm:text-[12px] md:text-[20px] leading-tight');
content = content.replace(/text-\[14px\] md:text-\[16px\]/g, 'text-[8px] sm:text-[11px] md:text-[16px] leading-tight');
content = content.replace(/text-\[16px\] text-\[#58595B\]/g, 'text-[9px] sm:text-[12px] md:text-[16px] text-[#58595B] leading-tight');
content = content.replace(/text-\[18px\] md:text-\[20px\]/g, 'text-[10px] sm:text-[14px] md:text-[20px] leading-none');

// 5. Logo sizing
content = content.replace(/className="w-\[120px\] md:w-\[160px\] h-auto"/g, 'className="w-[50px] sm:w-[80px] md:w-[160px] h-auto"');

// 6. Bottom row Button layout
content = content.replace(/<div className="col-span-3"><\/div>\n\s*<div className="my-3 flex items-center justify-center relative z-20">/g,
  '<div className="hidden md:block md:col-span-3"></div>\n                <div className="col-span-4 md:col-span-1 my-3 flex items-center justify-center relative z-20">');

// 7. Button text size mapping
content = content.replace(/className="w-full shadow-xl !text-sm max-w-\[95%\]"/g, 'className="w-[90%] md:w-full shadow-xl !text-[10px] sm:!text-sm max-w-full md:max-w-[95%] py-2 md:py-3 px-2 md:px-8"');

// 8. Improve text-center for row headers
content = content.replace(/<p className="font-\['Sora',sans-serif\] font-normal text-\[9px\]/g, `<p className="font-['Sora',sans-serif] font-normal text-[9px]`);

fs.writeFileSync('src/components/ComparisonTable.tsx', content);
