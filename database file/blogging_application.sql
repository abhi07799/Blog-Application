/*
 Navicat Premium Data Transfer

 Source Server         : demon
 Source Server Type    : MySQL
 Source Server Version : 80035 (8.0.35)
 Source Host           : localhost:3306
 Source Schema         : blogging_application

 Target Server Type    : MySQL
 Target Server Version : 80035 (8.0.35)
 File Encoding         : 65001

 Date: 10/05/2024 14:40:04
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for blogs
-- ----------------------------
DROP TABLE IF EXISTS `blogs`;
CREATE TABLE `blogs`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `blog_` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `blog_posted_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `blog_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `blog_likes` int NULL DEFAULT NULL,
  `blog_posted_on` datetime(6) NULL DEFAULT NULL,
  `blog_category` varbinary(255) NULL DEFAULT NULL,
  `blog_views` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of blogs
-- ----------------------------
INSERT INTO `blogs` VALUES (1, 'Grand Theft Auto VI is an upcoming action-adventure game in development by Rockstar Games. It is due to be the eighth main Grand Theft Auto game, following Grand Theft Auto V (2013), and the sixteenth entry overall. Set within the fictional open world state of Leonida—based on Florida—and its Miami-inspired Vice City, the story is expected to follow the criminal duo of Lucia and her male partner.\n Following years of speculation and anticipation, Rockstar confirmed in February 2022 that the game was in development. That September, footage from unfinished versions was leaked online in what journalists described as one of the biggest leaks in the history of the video game industry. The game was formally revealed in December 2023 and is scheduled to be released in 2025 for the PlayStation 5 and Xbox Series X/S. \n Grand Theft Auto VI is an action-adventure game set in the fictional open world state of Leonida—based on Florida—which includes Vice City, a fictionalised version of Miami.[1][2][3] Vice City was previously featured in Grand Theft Auto (1997) and as the main setting of Grand Theft Auto: Vice City (2002) and Grand Theft Auto: Vice City Stories (2006).[4][5][6] As with previous titles in the series, the game world parodies contemporary American culture, with satirical depictions of social media and influencer culture, and references to Internet memes such as the Florida Man.[7][8][9] The story follows a criminal duo: Lucia, the series\' first female protagonist since 2000,[b] and her male partner;[a] the first trailer depicts Lucia as a prison inmate, and later evading custody with her partner.[2][16] \n GTA 6 is coming in 2025, with Rockstar Games taking us back to the sun-soaked streets of Vice City. The reveal of the first official GTA 6 trailer gave us a pretty spectacular look at Leonida, hinting towards some of the wild sights and sounds that the state will have to offer us.\n If you\'re looking for more insight into the trailer, you\'ll want to check out our in-depth GTA 6 trailer breakdown. In it, we try to unpick some story details about Lucia – the protagonist leading Grand Theft Auto 6 – as well as get a better sense of the sort of scale which Rockstar is striving for. It\'s all exceptionally impressive, and there\'s plenty to dig into. So with that in mind, you\'ll want to keep on reading to find everything you need to know about GTA 6 ahead of its release next year', 'The Gamer', 'GTA 6: A Revolution in Gaming through AI', 0, '2024-05-10 13:34:17.159000', 0xACED0005737200136A6176612E7574696C2E41727261794C6973747881D21D99C7619D03000149000473697A6578700000000377040000000374000647616D696E67740005475441203674000E526F636B737461722047616D657378, 6);
INSERT INTO `blogs` VALUES (2, 'Natural history in the Indian subcontinent has a long heritage with a recorded history going back to the Vedic era. Natural history research in early times included the broad fields of palaeontology, zoology and botany. These studies would today be considered under field of ecology but in former times, such research was undertaken mainly by amateurs, often physicians, civil servants and army officers\n. Although the growth of modern natural history in India can be attributed to British colonialism and the growth of natural history in Britain, there is considerable evidence to suggest that India with its diverse landscapes, fauna and flora along with other tropical colonies helped in creating an increased interest in natural history in Britain and elsewhere in the world.[1] Natural history in India was also enriched by older traditions of conservation, folklore, nature study and the arts.  Over a thousand sites of the Indus Valley civilisation across north west South Asia, before 1700 BC have been studied to date. A large number of animal bones have been found at these sites; one-fifth of these comprising bones of wild fauna, such as the jackal, hare, chital, rhinoceros and elephant. Most seeds found in the dwellings of some western Indian sites are of wild plants now extinct in the region', 'The Adventurer', 'Unveiling India’s Thrilling Outdoor Adventures for Nature Lovers', 1, '2024-05-10 13:43:08.404000', 0xACED0005737200136A6176612E7574696C2E41727261794C6973747881D21D99C7619D03000149000473697A657870000000037704000000037400064E6174757265740009416476656E7475726574000346756E78, 5);
INSERT INTO `blogs` VALUES (3, 'Technology played a significant role in World War II. Some of the technologies used during the war were developed during the interwar years of the 1920s and 1930s, much was developed in response to needs and lessons learned during the war, while others were beginning to be developed as the war ended. Many wars have had major effects on the technologies that we use in our daily lives, but World War II had the greatest effect on the technology and devices that are used today. Technology also played a greater role in the conduct of World War II than in any other war in history, and had a critical role in its outcome.Military weapons technology experienced rapid advances during World War II, and over six years there was a disorientating rate of change in combat in everything from aircraft to small arms. Indeed, the war began with most armies utilizing technology that had changed little from that of World War I, and in some cases, had remained unchanged since the 19th century. For instance cavalry, trenches, and World War I-era battleships were normal in 1940, but six years later, armies around the world had developed jet aircraft, ballistic missiles, and even atomic weapons in the case of the United States.World War II was the first war where military operations often targeted the research efforts of the enemy. This included the exfiltration of Niels Bohr from German-occupied Denmark to Britain in 1943; the sabotage of Norwegian heavy water production; and the bombing of Peenemunde. Military operations were also conducted to obtain intelligence on the enemy\'s technology; for example, the Bruneval Raid for German radar and Operation Most III for the German V-2.', 'The Tech Dude', 'Technology during World War II', 0, '2024-05-10 13:47:13.352000', 0xACED0005737200136A6176612E7574696C2E41727261794C6973747881D21D99C7619D03000149000473697A65787000000003770400000003740009546563686E6F6C677974000C576F726C6420576172204949740007486973746F727978, 0);
INSERT INTO `blogs` VALUES (4, 'Nature is an inherent character or constitution,[1] particularly of the ecosphere or the universe as a whole. In this general sense nature refers to the laws, elements and phenomena of the physical world, including life. Although humans are part of nature, human activity or humans as a whole are often described as at times at odds, or outright separate and even superior to nature. During the advent of modern scientific method in the last several centuries, nature became the passive reality, organized and moved by divine laws.[3][4] With the Industrial revolution, nature increasingly became seen as the part of reality deprived from intentional intervention: it was hence considered as sacred by some traditions (Rousseau, American transcendentalism) or a mere decorum for divine providence or human history (Hegel, Marx). However, a vitalist vision of nature, closer to the pre-Socratic one, got reborn at the same time, especially after Charles Darwin. Within the various uses of the word today, nature often refers to geology and wildlife. Nature can refer to the general realm of living plants and animals, and in some cases to the processes associated with inanimate objects—the way that particular types of things exist and change of their own accord, such as the weather and geology of the Earth. It is often taken to mean the natural environment or wilderness—wild animals, rocks, forest, and in general those things that have not been substantially altered by human intervention, or which persist despite human intervention. For example, manufactured objects and human interaction generally are not considered part of nature, unless qualified as, for example, human nature or the whole of nature. This more traditional concept of natural things that can still be found today implies a distinction between the natural and the artificial, with the artificial being understood as that which has been brought into being by a human consciousness or a human mind. Depending on the particular context, the term natural might also be distinguished from the unnatural or the supernatural', 'Nature Lover', 'Nature: Best Medicine To Heal Your Soul', 0, '2024-05-10 13:50:06.091000', 0xACED0005737200136A6176612E7574696C2E41727261794C6973747881D21D99C7619D03000149000473697A657870000000037704000000037400064E6174757265740009416476656E7475726574000346756E78, 0);

SET FOREIGN_KEY_CHECKS = 1;