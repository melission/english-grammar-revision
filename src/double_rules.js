const double_rules = [
    [['Modals of speculations when you are not sure about the present'], ["If you need to speculate about the present situation, use " +
    "could, may, or might. For example: He told me yesterday that he wanted to visit his grandmother, so he could be at " +
    "her place now. It might rain, though the sky is clear. He looks important, he might be a politician. "]],
    [['Modals of speculations when you are sure about the present: must, cannot'], ['If you need to speculate about something in the present,' +
    'and you are perfectly confident in your guess, use must or can\'t ()can is not usually used for speculations). For ' +
    'example: She looks so familiar, she must be an actress! He barely do any workouts, he can\'t run a marathon. ']],
    [["Modals of speculation when you are sure about the past: must have done and ought have done"], ["If you need to speculate about a situation in the " +
    "past abd you are utterly sure about it, you need to use must/ought + have + verb in third form. Or if you are sure " +
    "that something did happened in the past, use cannot + have + verb in third form. For example, " +
    "I perfectly clear remember how i parked my car in the garage, but now it's gone! It must have been stolen. I cannot " +
    "have parked it anywhere else, there is no space for it! "]],
    [['Modals of speculations when you are not sure about the past: could/might/may have done'], [" If you need to speculate about a situation " +
    "that has already happened, you need to use one of the modals of speculation (could, may, might) + have + verb in " +
    "third form. For example: I do not recall, but I think I might have been home at 3pm yesterday."]],
    [['Modals of speculations: criticise and advice'], ['should do / ought to do - advice\n' +
    'should have done / ought to have done - criticism']],
    [['Do or Make'], ['Do is used when speaking about processes without focusing on the result. Do harm and do job. '
    + 'Make focuses on the result. For example, make a choice and make a care. Both actions are completed.']],
    [['The pronunciation of C'], ['In words which start with \'ca\', \'co\', \'cu\' the letter \'c\' is being ' +
    'pronounced as [k]. For example: cat, corn, and cucumber. In words which start with \'ci\', \'ce\', and ' +
    '\'cy\' the letter \'c\' is being pronounced like [s]. For example: \'city\', \'century\', and \'cycle\'. ']],
    [["The pronunciation of G"], ["In words which start with 'ga', 'go', and 'gu', it's [g] sound. For example, 'gauge'," +
    "'gold' and 'guild'. Yet in words which start with 'ge', 'gy', and 'gi', it's [dʒ] sounds. For example, " +
    "'gentle', 'gym', and 'gipsy'. "]],
    [['My or Mine'], ["'My' is used to show the fact of the possession of a noun, while 'mine' shows the fact of " +
    "possession itself and need no noun after it. For example: this is my husband but this husband is mine. "]],
    [['Double consonants'], ["The last consonant is doubled in two cases. If it's a three letter word with a " +
    "structure consonant-vowel-consonant. For example: red -> redder; wet -> wetter; stop -> stopped." +
    "If it's a two syllable word with the stress on the second syllable and the second syllable has a C-V-C structure. " +
    "For example: preFÉR -> preferred; énter -> entered; admit -> admitted. "]],
    [["The usage of None"], ["As 'mine', none does not need a noun after and none works similar to no one. None wears masks is equal" +
    " to no one wears masks and no people wear masks. "]],
    [["Gradable and Non-gradable adjectives"], ["If an adjective has no meaning of 'very' in it, it's gradable. " +
    "For example, tasty is gradable, but delicious [very tasty] is non-gradable. Non-gradable adjectives have grades " +
    "already, so no gradable adverbs are allowed. For example, stunning -> very beautiful, freezing -> very cold. If you " +
    "need to check whether an adjective is gradable check the meaning in Cambridge dictionary."]],
    [["Gradable and Non-gradable adverbs"], ["If an adverb has the meaning of 'very' or other gradations, it's gradable " +
    "and can be used with gradable adjectives. For example: very, extremely, a bit, unusually, slightly, fantastically," +
    " immensely. If an adverb has a completed meaning, it's non-gradable. For example, completely, totally, absolutely. " +
    "Really, quite, and pretty can be both: gradable and non-gradable adverbs. Really beautiful and really stunning. " +
    "Almost, nearly, and virtually are non-gradable only. Rather is exclusively gradable. Utterly can be used with " +
    "gradable and non-gradable adjectives. "]],
    [["Illness vs Disease vs Sickness"], ["Illness is about feeling unwell. Disease is about a having a diagnose. " +
    "Sickness is about the desire to vomit or about something utterly unusual. "]],
    [["Possessives 's and s'"], ["If it's a singular noun, it's possible to show a possession with either option: " +
    "'It is Charles' book' or 'It is Charles's book'. Both options are grammatically correct. If a noun is a plural and" +
    " regular noun (regular nouns form their plural forms with adding 's' at their end. a worker -> workers) you need to " +
    "simply add an apostrophe at the end. For example, workers' salary or teachers' responsibilities. If a noun is irregular, " +
    "people foe example, you need to add strictly 's at the end. People -> people's, children -> children's. "]],
    [["Reported (indirect) speech."], ["Reported speech is a way to say what someone said in a past. To form indirect " +
    "speech, you need to backshift the sentence's tense on one level in the past. For example: '-I'm very tired after " +
    "the marathon', she said' should become 'She said that she was very tired after the marathon'; the tense of the " +
    "first sentence was backshifted on one step in a past: from present simple to past simple. "]],
    [["The zero condition."], ["Zero condition is about real past/present situations, " +
    "and it forms with 'if' + a statement in the past/present + a comma + a statement of the same tense. For example, " +
    "if it rains, we work from home OR we work from home if it rains [note that in the second case there is no comma."]],
   [['The first condition.'], ["First condition is about a real situation which can lead to future consequences. It forms" +
   " with 'if' + a statement in the present tense + a comma + a statement in the future tense. For example, if I have a " +
   "dog, I will name it Spoke. Note that it's incorrect to use 'if' and 'will' in one part of a conditional sentence. "]],
    [['The second condition.'], ["Second condition is about unreal present; in other words, what would happen if something " +
    "happened. It forms with 'if' + statement in the past + a comma + a statement with would as a main verb. " +
    "For example, if I were you, I would spend more time preparing for IELTS exam. It's unreal for me to be you, so this is " +
    "the reason why this is unreal present."]],
    [["The third condition."], ["It's a condition about unreal past; in other words, what would have happened if something " +
    "had happened. It forms with 'if' + a statement in past perfect + a comma + a subject + 'would have + verb in the third" +
    " form. For example, If i had applied to university four years ago, I would have gotten a Master's degree already. " +
    "I didn't applied to university four years ago, and I can't change in [there is no time travel available in 2021]."]],
    [["A comma after an introduction"], ["Time, place, a condition, and a fact statement are considered as an " +
    "introduction; you need to use a comma after it. For example, When I was young (time), I could sleep three hours a " +
    "day. In the park (a place), there were plenty of kids yesterday. If you started (a condition), you need to finish " +
    "it! As you are aware (a fact statement), the queen arrives at 6 pm today. "]],
    [["A comma after a transitional phrase/word. "], ["However, as a result, consequently, in summary are transitional " +
    "phrases/words; a transitional phrase is always followed by a comma. Fpr example: as a result, the population of " +
    "the planet has doubled in the last one hundred years. However, it might be considered not only negatively. " +
    "Consequently, the more people means the wider market, so it is possible to get more revenue. "]],
    [["Commas before and after an interjection"], ["If you use words like 'yes', 'no', 'indeed', as interjections, you " +
    "need to separate these words with commas from the rest of a sentence. For example: The books, indeed, help to improve " +
    "writing. I have a driving license, and, yes, I can drive a car. "]],
]

export default double_rules;