/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/animated-headline.js":
/*!*******************************************!*\
  !*** ./resources/js/animated-headline.js ***!
  \*******************************************/
/***/ (() => {

eval("jQuery(document).ready(function ($) {\n  //set animation timing\n  var animationDelay = 2500,\n      //loading bar effect\n  barAnimationDelay = 3800,\n      barWaiting = barAnimationDelay - 3000,\n      //3000 is the duration of the transition on the loading bar - set in the scss/css file\n  //letters effect\n  lettersDelay = 50,\n      //type effect\n  typeLettersDelay = 150,\n      selectionDuration = 500,\n      typeAnimationDelay = selectionDuration + 800,\n      //clip effect \n  revealDuration = 600,\n      revealAnimationDelay = 1500;\n  initHeadline();\n\n  function initHeadline() {\n    //insert <i> element for each letter of a changing word\n    singleLetters($('.cd-headline.letters').find('b')); //initialise headline animation\n\n    animateHeadline($('.cd-headline'));\n  }\n\n  function singleLetters($words) {\n    $words.each(function () {\n      var word = $(this),\n          letters = word.text().split(''),\n          selected = word.hasClass('is-visible');\n\n      for (i in letters) {\n        if (word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';\n        letters[i] = selected ? '<i class=\"in\">' + letters[i] + '</i>' : '<i>' + letters[i] + '</i>';\n      }\n\n      var newLetters = letters.join('');\n      word.html(newLetters).css('opacity', 1);\n    });\n  }\n\n  function animateHeadline($headlines) {\n    var duration = animationDelay;\n    $headlines.each(function () {\n      var headline = $(this);\n\n      if (headline.hasClass('loading-bar')) {\n        duration = barAnimationDelay;\n        setTimeout(function () {\n          headline.find('.cd-words-wrapper').addClass('is-loading');\n        }, barWaiting);\n      } else if (headline.hasClass('clip')) {\n        var spanWrapper = headline.find('.cd-words-wrapper'),\n            newWidth = spanWrapper.width() + 10;\n        spanWrapper.css('width', newWidth);\n      } else if (!headline.hasClass('type')) {\n        //assign to .cd-words-wrapper the width of its longest word\n        var words = headline.find('.cd-words-wrapper b'),\n            width = 0;\n        words.each(function () {\n          var wordWidth = $(this).width();\n          if (wordWidth > width) width = wordWidth;\n        });\n        headline.find('.cd-words-wrapper').css('width', width);\n      }\n\n      ; //trigger animation\n\n      setTimeout(function () {\n        hideWord(headline.find('.is-visible').eq(0));\n      }, duration);\n    });\n  }\n\n  function hideWord($word) {\n    var nextWord = takeNext($word);\n\n    if ($word.parents('.cd-headline').hasClass('type')) {\n      var parentSpan = $word.parent('.cd-words-wrapper');\n      parentSpan.addClass('selected').removeClass('waiting');\n      setTimeout(function () {\n        parentSpan.removeClass('selected');\n        $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');\n      }, selectionDuration);\n      setTimeout(function () {\n        showWord(nextWord, typeLettersDelay);\n      }, typeAnimationDelay);\n    } else if ($word.parents('.cd-headline').hasClass('letters')) {\n      var bool = $word.children('i').length >= nextWord.children('i').length ? true : false;\n      hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);\n      showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);\n    } else if ($word.parents('.cd-headline').hasClass('clip')) {\n      $word.parents('.cd-words-wrapper').animate({\n        width: '2px'\n      }, revealDuration, function () {\n        switchWord($word, nextWord);\n        showWord(nextWord);\n      });\n    } else if ($word.parents('.cd-headline').hasClass('loading-bar')) {\n      $word.parents('.cd-words-wrapper').removeClass('is-loading');\n      switchWord($word, nextWord);\n      setTimeout(function () {\n        hideWord(nextWord);\n      }, barAnimationDelay);\n      setTimeout(function () {\n        $word.parents('.cd-words-wrapper').addClass('is-loading');\n      }, barWaiting);\n    } else {\n      switchWord($word, nextWord);\n      setTimeout(function () {\n        hideWord(nextWord);\n      }, animationDelay);\n    }\n  }\n\n  function showWord($word, $duration) {\n    if ($word.parents('.cd-headline').hasClass('type')) {\n      showLetter($word.find('i').eq(0), $word, false, $duration);\n      $word.addClass('is-visible').removeClass('is-hidden');\n    } else if ($word.parents('.cd-headline').hasClass('clip')) {\n      $word.parents('.cd-words-wrapper').animate({\n        'width': $word.width() + 10\n      }, revealDuration, function () {\n        setTimeout(function () {\n          hideWord($word);\n        }, revealAnimationDelay);\n      });\n    }\n  }\n\n  function hideLetter($letter, $word, $bool, $duration) {\n    $letter.removeClass('in').addClass('out');\n\n    if (!$letter.is(':last-child')) {\n      setTimeout(function () {\n        hideLetter($letter.next(), $word, $bool, $duration);\n      }, $duration);\n    } else if ($bool) {\n      setTimeout(function () {\n        hideWord(takeNext($word));\n      }, animationDelay);\n    }\n\n    if ($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {\n      var nextWord = takeNext($word);\n      switchWord($word, nextWord);\n    }\n  }\n\n  function showLetter($letter, $word, $bool, $duration) {\n    $letter.addClass('in').removeClass('out');\n\n    if (!$letter.is(':last-child')) {\n      setTimeout(function () {\n        showLetter($letter.next(), $word, $bool, $duration);\n      }, $duration);\n    } else {\n      if ($word.parents('.cd-headline').hasClass('type')) {\n        setTimeout(function () {\n          $word.parents('.cd-words-wrapper').addClass('waiting');\n        }, 200);\n      }\n\n      if (!$bool) {\n        setTimeout(function () {\n          hideWord($word);\n        }, animationDelay);\n      }\n    }\n  }\n\n  function takeNext($word) {\n    return !$word.is(':last-child') ? $word.next() : $word.parent().children().eq(0);\n  }\n\n  function takePrev($word) {\n    return !$word.is(':first-child') ? $word.prev() : $word.parent().children().last();\n  }\n\n  function switchWord($oldWord, $newWord) {\n    $oldWord.removeClass('is-visible').addClass('is-hidden');\n    $newWord.removeClass('is-hidden').addClass('is-visible');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYW5pbWF0ZWQtaGVhZGxpbmUuanM/MWM1YyJdLCJuYW1lcyI6WyJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5IiwiJCIsImFuaW1hdGlvbkRlbGF5IiwiYmFyQW5pbWF0aW9uRGVsYXkiLCJiYXJXYWl0aW5nIiwibGV0dGVyc0RlbGF5IiwidHlwZUxldHRlcnNEZWxheSIsInNlbGVjdGlvbkR1cmF0aW9uIiwidHlwZUFuaW1hdGlvbkRlbGF5IiwicmV2ZWFsRHVyYXRpb24iLCJyZXZlYWxBbmltYXRpb25EZWxheSIsImluaXRIZWFkbGluZSIsInNpbmdsZUxldHRlcnMiLCJmaW5kIiwiYW5pbWF0ZUhlYWRsaW5lIiwiJHdvcmRzIiwiZWFjaCIsIndvcmQiLCJsZXR0ZXJzIiwidGV4dCIsInNwbGl0Iiwic2VsZWN0ZWQiLCJoYXNDbGFzcyIsImkiLCJwYXJlbnRzIiwibGVuZ3RoIiwibmV3TGV0dGVycyIsImpvaW4iLCJodG1sIiwiY3NzIiwiJGhlYWRsaW5lcyIsImR1cmF0aW9uIiwiaGVhZGxpbmUiLCJzZXRUaW1lb3V0IiwiYWRkQ2xhc3MiLCJzcGFuV3JhcHBlciIsIm5ld1dpZHRoIiwid2lkdGgiLCJ3b3JkcyIsIndvcmRXaWR0aCIsImhpZGVXb3JkIiwiZXEiLCIkd29yZCIsIm5leHRXb3JkIiwidGFrZU5leHQiLCJwYXJlbnRTcGFuIiwicGFyZW50IiwicmVtb3ZlQ2xhc3MiLCJjaGlsZHJlbiIsInNob3dXb3JkIiwiYm9vbCIsImhpZGVMZXR0ZXIiLCJzaG93TGV0dGVyIiwiYW5pbWF0ZSIsInN3aXRjaFdvcmQiLCIkZHVyYXRpb24iLCIkbGV0dGVyIiwiJGJvb2wiLCJpcyIsIm5leHQiLCJ0YWtlUHJldiIsInByZXYiLCJsYXN0IiwiJG9sZFdvcmQiLCIkbmV3V29yZCJdLCJtYXBwaW5ncyI6IkFBQUFBLE1BQU0sQ0FBQ0MsUUFBRCxDQUFOLENBQWlCQyxLQUFqQixDQUF1QixVQUFTQyxDQUFULEVB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QUFVLENBQUMsWUFBVTtBQUFFTyxVQUFBQSxRQUFRLENBQUNFLEtBQUQsQ0FBUjtBQUFpQixTQUE5QixFQUFnQ3hDLGNBQWhDLENBQVY7QUFBMkQ7QUFDeEU7QUFDRDs7QUFFRCxXQUFTMEMsUUFBVCxDQUFrQkYsS0FBbEIsRUFBeUI7QUFDeEIsV0FBUSxDQUFDQSxLQUFLLENBQUNnQixFQUFOLENBQVMsYUFBVCxDQUFGLEdBQTZCaEIsS0FBSyxDQUFDaUIsSUFBTixFQUE3QixHQUE0Q2pCLEtBQUssQ0FBQ0ksTUFBTixHQUFlRSxRQUFmLEdBQTBCUCxFQUExQixDQUE2QixDQUE3QixDQUFuRDtBQUNBOztBQUVELFdBQVNtQixRQUFULENBQWtCbEIsS0FBbEIsRUFBeUI7QUFDeEIsV0FBUSxDQUFDQSxLQUFLLENBQUNnQixFQUFOLENBQVMsY0FBVCxDQUFGLEdBQThCaEIsS0FBSyxDQUFDbUIsSUFBTixFQUE5QixHQUE2Q25CLEtBQUssQ0FBQ0ksTUFBTixHQUFlRSxRQUFmLEdBQTBCYyxJQUExQixFQUFwRDtBQUNBOztBQUVELFdBQVNSLFVBQVQsQ0FBb0JTLFFBQXBCLEVBQThCQyxRQUE5QixFQUF3QztBQUN2Q0QsSUFBQUEsUUFBUSxDQUFDaEIsV0FBVCxDQUFxQixZQUFyQixFQUFtQ2IsUUFBbkMsQ0FBNEMsV0FBNUM7QUFDQThCLElBQUFBLFFBQVEsQ0FBQ2pCLFdBQVQsQ0FBcUIsV0FBckIsRUFBa0NiLFFBQWxDLENBQTJDLFlBQTNDO0FBQ0E7QUFDRCxDQXpKRCIsInNvdXJjZXNDb250ZW50IjpbImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCl7XHJcblx0Ly9zZXQgYW5pbWF0aW9uIHRpbWluZ1xyXG5cdHZhciBhbmltYXRpb25EZWxheSA9IDI1MDAsXHJcblx0XHQvL2xvYWRpbmcgYmFyIGVmZmVjdFxyXG5cdFx0YmFyQW5pbWF0aW9uRGVsYXkgPSAzODAwLFxyXG5cdFx0YmFyV2FpdGluZyA9IGJhckFuaW1hdGlvbkRlbGF5IC0gMzAwMCwgLy8zMDAwIGlzIHRoZSBkdXJhdGlvbiBvZiB0aGUgdHJhbnNpdGlvbiBvbiB0aGUgbG9hZGluZyBiYXIgLSBzZXQgaW4gdGhlIHNjc3MvY3NzIGZpbGVcclxuXHRcdC8vbGV0dGVycyBlZmZlY3RcclxuXHRcdGxldHRlcnNEZWxheSA9IDUwLFxyXG5cdFx0Ly90eXBlIGVmZmVjdFxyXG5cdFx0dHlwZUxldHRlcnNEZWxheSA9IDE1MCxcclxuXHRcdHNlbGVjdGlvbkR1cmF0aW9uID0gNTAwLFxyXG5cdFx0dHlwZUFuaW1hdGlvbkRlbGF5ID0gc2VsZWN0aW9uRHVyYXRpb24gKyA4MDAsXHJcblx0XHQvL2NsaXAgZWZmZWN0IFxyXG5cdFx0cmV2ZWFsRHVyYXRpb24gPSA2MDAsXHJcblx0XHRyZXZlYWxBbmltYXRpb25EZWxheSA9IDE1MDA7XHJcblx0XHJcblx0aW5pdEhlYWRsaW5lKCk7XHJcblx0XHJcblxyXG5cdGZ1bmN0aW9uIGluaXRIZWFkbGluZSgpIHtcclxuXHRcdC8vaW5zZXJ0IDxpPiBlbGVtZW50IGZvciBlYWNoIGxldHRlciBvZiBhIGNoYW5naW5nIHdvcmRcclxuXHRcdHNpbmdsZUxldHRlcnMoJCgnLmNkLWhlYWRsaW5lLmxldHRlcnMnKS5maW5kKCdiJykpO1xyXG5cdFx0Ly9pbml0aWFsaXNlIGhlYWRsaW5lIGFuaW1hdGlvblxyXG5cdFx0YW5pbWF0ZUhlYWRsaW5lKCQoJy5jZC1oZWFkbGluZScpKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHNpbmdsZUxldHRlcnMoJHdvcmRzKSB7XHJcblx0XHQkd29yZHMuZWFjaChmdW5jdGlvbigpe1xyXG5cdFx0XHR2YXIgd29yZCA9ICQodGhpcyksXHJcblx0XHRcdFx0bGV0dGVycyA9IHdvcmQudGV4dCgpLnNwbGl0KCcnKSxcclxuXHRcdFx0XHRzZWxlY3RlZCA9IHdvcmQuaGFzQ2xhc3MoJ2lzLXZpc2libGUnKTtcclxuXHRcdFx0Zm9yIChpIGluIGxldHRlcnMpIHtcclxuXHRcdFx0XHRpZih3b3JkLnBhcmVudHMoJy5yb3RhdGUtMicpLmxlbmd0aCA+IDApIGxldHRlcnNbaV0gPSAnPGVtPicgKyBsZXR0ZXJzW2ldICsgJzwvZW0+JztcclxuXHRcdFx0XHRsZXR0ZXJzW2ldID0gKHNlbGVjdGVkKSA/ICc8aSBjbGFzcz1cImluXCI+JyArIGxldHRlcnNbaV0gKyAnPC9pPic6ICc8aT4nICsgbGV0dGVyc1tpXSArICc8L2k+JztcclxuXHRcdFx0fVxyXG5cdFx0ICAgIHZhciBuZXdMZXR0ZXJzID0gbGV0dGVycy5qb2luKCcnKTtcclxuXHRcdCAgICB3b3JkLmh0bWwobmV3TGV0dGVycykuY3NzKCdvcGFjaXR5JywgMSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGFuaW1hdGVIZWFkbGluZSgkaGVhZGxpbmVzKSB7XHJcblx0XHR2YXIgZHVyYXRpb24gPSBhbmltYXRpb25EZWxheTtcclxuXHRcdCRoZWFkbGluZXMuZWFjaChmdW5jdGlvbigpe1xyXG5cdFx0XHR2YXIgaGVhZGxpbmUgPSAkKHRoaXMpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYoaGVhZGxpbmUuaGFzQ2xhc3MoJ2xvYWRpbmctYmFyJykpIHtcclxuXHRcdFx0XHRkdXJhdGlvbiA9IGJhckFuaW1hdGlvbkRlbGF5O1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgaGVhZGxpbmUuZmluZCgnLmNkLXdvcmRzLXdyYXBwZXInKS5hZGRDbGFzcygnaXMtbG9hZGluZycpIH0sIGJhcldhaXRpbmcpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGhlYWRsaW5lLmhhc0NsYXNzKCdjbGlwJykpe1xyXG5cdFx0XHRcdHZhciBzcGFuV3JhcHBlciA9IGhlYWRsaW5lLmZpbmQoJy5jZC13b3Jkcy13cmFwcGVyJyksXHJcblx0XHRcdFx0XHRuZXdXaWR0aCA9IHNwYW5XcmFwcGVyLndpZHRoKCkgKyAxMFxyXG5cdFx0XHRcdHNwYW5XcmFwcGVyLmNzcygnd2lkdGgnLCBuZXdXaWR0aCk7XHJcblx0XHRcdH0gZWxzZSBpZiAoIWhlYWRsaW5lLmhhc0NsYXNzKCd0eXBlJykgKSB7XHJcblx0XHRcdFx0Ly9hc3NpZ24gdG8gLmNkLXdvcmRzLXdyYXBwZXIgdGhlIHdpZHRoIG9mIGl0cyBsb25nZXN0IHdvcmRcclxuXHRcdFx0XHR2YXIgd29yZHMgPSBoZWFkbGluZS5maW5kKCcuY2Qtd29yZHMtd3JhcHBlciBiJyksXHJcblx0XHRcdFx0XHR3aWR0aCA9IDA7XHJcblx0XHRcdFx0d29yZHMuZWFjaChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0dmFyIHdvcmRXaWR0aCA9ICQodGhpcykud2lkdGgoKTtcclxuXHRcdFx0XHQgICAgaWYgKHdvcmRXaWR0aCA+IHdpZHRoKSB3aWR0aCA9IHdvcmRXaWR0aDtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRoZWFkbGluZS5maW5kKCcuY2Qtd29yZHMtd3JhcHBlcicpLmNzcygnd2lkdGgnLCB3aWR0aCk7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHQvL3RyaWdnZXIgYW5pbWF0aW9uXHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgaGlkZVdvcmQoIGhlYWRsaW5lLmZpbmQoJy5pcy12aXNpYmxlJykuZXEoMCkgKSB9LCBkdXJhdGlvbik7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGhpZGVXb3JkKCR3b3JkKSB7XHJcblx0XHR2YXIgbmV4dFdvcmQgPSB0YWtlTmV4dCgkd29yZCk7XHJcblx0XHRcclxuXHRcdGlmKCR3b3JkLnBhcmVudHMoJy5jZC1oZWFkbGluZScpLmhhc0NsYXNzKCd0eXBlJykpIHtcclxuXHRcdFx0dmFyIHBhcmVudFNwYW4gPSAkd29yZC5wYXJlbnQoJy5jZC13b3Jkcy13cmFwcGVyJyk7XHJcblx0XHRcdHBhcmVudFNwYW4uYWRkQ2xhc3MoJ3NlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ3dhaXRpbmcnKTtcdFxyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IFxyXG5cdFx0XHRcdHBhcmVudFNwYW4ucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7IFxyXG5cdFx0XHRcdCR3b3JkLnJlbW92ZUNsYXNzKCdpcy12aXNpYmxlJykuYWRkQ2xhc3MoJ2lzLWhpZGRlbicpLmNoaWxkcmVuKCdpJykucmVtb3ZlQ2xhc3MoJ2luJykuYWRkQ2xhc3MoJ291dCcpO1xyXG5cdFx0XHR9LCBzZWxlY3Rpb25EdXJhdGlvbik7XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgc2hvd1dvcmQobmV4dFdvcmQsIHR5cGVMZXR0ZXJzRGVsYXkpIH0sIHR5cGVBbmltYXRpb25EZWxheSk7XHJcblx0XHRcclxuXHRcdH0gZWxzZSBpZigkd29yZC5wYXJlbnRzKCcuY2QtaGVhZGxpbmUnKS5oYXNDbGFzcygnbGV0dGVycycpKSB7XHJcblx0XHRcdHZhciBib29sID0gKCR3b3JkLmNoaWxkcmVuKCdpJykubGVuZ3RoID49IG5leHRXb3JkLmNoaWxkcmVuKCdpJykubGVuZ3RoKSA/IHRydWUgOiBmYWxzZTtcclxuXHRcdFx0aGlkZUxldHRlcigkd29yZC5maW5kKCdpJykuZXEoMCksICR3b3JkLCBib29sLCBsZXR0ZXJzRGVsYXkpO1xyXG5cdFx0XHRzaG93TGV0dGVyKG5leHRXb3JkLmZpbmQoJ2knKS5lcSgwKSwgbmV4dFdvcmQsIGJvb2wsIGxldHRlcnNEZWxheSk7XHJcblxyXG5cdFx0fSAgZWxzZSBpZigkd29yZC5wYXJlbnRzKCcuY2QtaGVhZGxpbmUnKS5oYXNDbGFzcygnY2xpcCcpKSB7XHJcblx0XHRcdCR3b3JkLnBhcmVudHMoJy5jZC13b3Jkcy13cmFwcGVyJykuYW5pbWF0ZSh7IHdpZHRoIDogJzJweCcgfSwgcmV2ZWFsRHVyYXRpb24sIGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0c3dpdGNoV29yZCgkd29yZCwgbmV4dFdvcmQpO1xyXG5cdFx0XHRcdHNob3dXb3JkKG5leHRXb3JkKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSBlbHNlIGlmICgkd29yZC5wYXJlbnRzKCcuY2QtaGVhZGxpbmUnKS5oYXNDbGFzcygnbG9hZGluZy1iYXInKSl7XHJcblx0XHRcdCR3b3JkLnBhcmVudHMoJy5jZC13b3Jkcy13cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ2lzLWxvYWRpbmcnKTtcclxuXHRcdFx0c3dpdGNoV29yZCgkd29yZCwgbmV4dFdvcmQpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IGhpZGVXb3JkKG5leHRXb3JkKSB9LCBiYXJBbmltYXRpb25EZWxheSk7XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgJHdvcmQucGFyZW50cygnLmNkLXdvcmRzLXdyYXBwZXInKS5hZGRDbGFzcygnaXMtbG9hZGluZycpIH0sIGJhcldhaXRpbmcpO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN3aXRjaFdvcmQoJHdvcmQsIG5leHRXb3JkKTtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpeyBoaWRlV29yZChuZXh0V29yZCkgfSwgYW5pbWF0aW9uRGVsYXkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gc2hvd1dvcmQoJHdvcmQsICRkdXJhdGlvbikge1xyXG5cdFx0aWYoJHdvcmQucGFyZW50cygnLmNkLWhlYWRsaW5lJykuaGFzQ2xhc3MoJ3R5cGUnKSkge1xyXG5cdFx0XHRzaG93TGV0dGVyKCR3b3JkLmZpbmQoJ2knKS5lcSgwKSwgJHdvcmQsIGZhbHNlLCAkZHVyYXRpb24pO1xyXG5cdFx0XHQkd29yZC5hZGRDbGFzcygnaXMtdmlzaWJsZScpLnJlbW92ZUNsYXNzKCdpcy1oaWRkZW4nKTtcclxuXHJcblx0XHR9ICBlbHNlIGlmKCR3b3JkLnBhcmVudHMoJy5jZC1oZWFkbGluZScpLmhhc0NsYXNzKCdjbGlwJykpIHtcclxuXHRcdFx0JHdvcmQucGFyZW50cygnLmNkLXdvcmRzLXdyYXBwZXInKS5hbmltYXRlKHsgJ3dpZHRoJyA6ICR3b3JkLndpZHRoKCkgKyAxMCB9LCByZXZlYWxEdXJhdGlvbiwgZnVuY3Rpb24oKXsgXHJcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpeyBoaWRlV29yZCgkd29yZCkgfSwgcmV2ZWFsQW5pbWF0aW9uRGVsYXkpOyBcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBoaWRlTGV0dGVyKCRsZXR0ZXIsICR3b3JkLCAkYm9vbCwgJGR1cmF0aW9uKSB7XHJcblx0XHQkbGV0dGVyLnJlbW92ZUNsYXNzKCdpbicpLmFkZENsYXNzKCdvdXQnKTtcclxuXHRcdFxyXG5cdFx0aWYoISRsZXR0ZXIuaXMoJzpsYXN0LWNoaWxkJykpIHtcclxuXHRcdCBcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgaGlkZUxldHRlcigkbGV0dGVyLm5leHQoKSwgJHdvcmQsICRib29sLCAkZHVyYXRpb24pOyB9LCAkZHVyYXRpb24pOyAgXHJcblx0XHR9IGVsc2UgaWYoJGJvb2wpIHsgXHJcblx0XHQgXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IGhpZGVXb3JkKHRha2VOZXh0KCR3b3JkKSkgfSwgYW5pbWF0aW9uRGVsYXkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKCRsZXR0ZXIuaXMoJzpsYXN0LWNoaWxkJykgJiYgJCgnaHRtbCcpLmhhc0NsYXNzKCduby1jc3N0cmFuc2l0aW9ucycpKSB7XHJcblx0XHRcdHZhciBuZXh0V29yZCA9IHRha2VOZXh0KCR3b3JkKTtcclxuXHRcdFx0c3dpdGNoV29yZCgkd29yZCwgbmV4dFdvcmQpO1xyXG5cdFx0fSBcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHNob3dMZXR0ZXIoJGxldHRlciwgJHdvcmQsICRib29sLCAkZHVyYXRpb24pIHtcclxuXHRcdCRsZXR0ZXIuYWRkQ2xhc3MoJ2luJykucmVtb3ZlQ2xhc3MoJ291dCcpO1xyXG5cdFx0XHJcblx0XHRpZighJGxldHRlci5pcygnOmxhc3QtY2hpbGQnKSkgeyBcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpeyBzaG93TGV0dGVyKCRsZXR0ZXIubmV4dCgpLCAkd29yZCwgJGJvb2wsICRkdXJhdGlvbik7IH0sICRkdXJhdGlvbik7IFxyXG5cdFx0fSBlbHNlIHsgXHJcblx0XHRcdGlmKCR3b3JkLnBhcmVudHMoJy5jZC1oZWFkbGluZScpLmhhc0NsYXNzKCd0eXBlJykpIHsgc2V0VGltZW91dChmdW5jdGlvbigpeyAkd29yZC5wYXJlbnRzKCcuY2Qtd29yZHMtd3JhcHBlcicpLmFkZENsYXNzKCd3YWl0aW5nJyk7IH0sIDIwMCk7fVxyXG5cdFx0XHRpZighJGJvb2wpIHsgc2V0VGltZW91dChmdW5jdGlvbigpeyBoaWRlV29yZCgkd29yZCkgfSwgYW5pbWF0aW9uRGVsYXkpIH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHRha2VOZXh0KCR3b3JkKSB7XHJcblx0XHRyZXR1cm4gKCEkd29yZC5pcygnOmxhc3QtY2hpbGQnKSkgPyAkd29yZC5uZXh0KCkgOiAkd29yZC5wYXJlbnQoKS5jaGlsZHJlbigpLmVxKDApO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gdGFrZVByZXYoJHdvcmQpIHtcclxuXHRcdHJldHVybiAoISR3b3JkLmlzKCc6Zmlyc3QtY2hpbGQnKSkgPyAkd29yZC5wcmV2KCkgOiAkd29yZC5wYXJlbnQoKS5jaGlsZHJlbigpLmxhc3QoKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHN3aXRjaFdvcmQoJG9sZFdvcmQsICRuZXdXb3JkKSB7XHJcblx0XHQkb2xkV29yZC5yZW1vdmVDbGFzcygnaXMtdmlzaWJsZScpLmFkZENsYXNzKCdpcy1oaWRkZW4nKTtcclxuXHRcdCRuZXdXb3JkLnJlbW92ZUNsYXNzKCdpcy1oaWRkZW4nKS5hZGRDbGFzcygnaXMtdmlzaWJsZScpO1xyXG5cdH1cclxufSk7Il0sImZpbGUiOiIuL3Jlc291cmNlcy9qcy9hbmltYXRlZC1oZWFkbGluZS5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/animated-headline.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/animated-headline.js"]();
/******/ 	
/******/ })()
;