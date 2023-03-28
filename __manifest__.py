{
    'name': 'Quiz Timer',
    'version': "16.0.1.0.0",
    'sequence': -1,
    'installable': True,
    'application': True,
    'depends': ['base', 'survey'],
    'data': [
        'views/res_config_settings.xml',
        'views/quiz_time.xml',
    ],
    'assets': {
        'survey.survey_assets': [
            'quiz_time/static/src/js/quiz_timer.js',
        ],
    }
}