<?php
declare(strict_types=1);
/**
 * @copyright Copyright (c) 2022 Joas Schilling <coding@schilljs.com>
 *
 * @author Joas Schilling <coding@schilljs.com>
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
namespace OCA\Theming\Themes;

use OCA\Theming\ITheme;

class DarkHighContrastTheme extends HighContrastTheme implements ITheme {

	public function getId(): string {
		return 'dark-highcontrast';
	}

	public function getMediaQuery(): string {
		return '(prefers-color-scheme: dark) and (prefers-contrast: more)';
	}

	public function getTitle(): string {
		return $this->l->t('Dark theme with high contrast mode');
	}

	public function getEnableLabel(): string {
		return $this->l->t('Enable dark high contrast mode');
	}

	public function getDescription(): string {
		return $this->l->t('Similar to the high contrast mode, but with dark colours.');
	}

	public function getCSSVariables(): array {
		$variables = parent::getCSSVariables();

		// FIXME …
		$variables = $variables;

		return $variables;
	}
}
